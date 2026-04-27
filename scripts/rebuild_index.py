# -*- coding: utf-8 -*-
"""One-time helper: shrink index.html by replacing inlined hero images and emptying prod grid."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INDEX = ROOT / "index.html"

HERO_BLOCKS = [
    ("21", "شنطة اللؤلؤ الكلاسيك"),
    ("22", "طوق الرأس اللؤلؤي"),
    ("17", "شنطة الكريستال الأحمر"),
]


def replace_long_hero_lines(html: str) -> str:
    """Replace three hg-item blocks that contain huge base64 <img> lines."""
    out = html
    block_re = re.compile(
        r'<div class="hg-item">\s*<img[^>]{100,}>\s*'
        r'<div class="hg-overlay">\s*<span class="hg-name">[^<]*</span>\s*</div>\s*</div>',
        re.DOTALL,
    )
    for img_stem, name in HERO_BLOCKS:
        fresh = (
            f'<div class="hg-item">\n'
            f'              <img src="img/{img_stem}.jpeg" loading="lazy" alt="{name}"/>\n'
            f'              <div class="hg-overlay">\n'
            f'                <span class="hg-name">{name}</span>\n'
            f'              </div>\n'
            f'            </div>'
        )
        out, n = block_re.subn(fresh, out, count=1)
        if n != 1:
            raise RuntimeError(f"Expected to replace 1 hg-item for {img_stem}, got {n}")
    return out


def replace_prod_grid(html: str) -> str:
    start = html.find('<div class="prod-grid" id="prodGrid">')
    if start == -1:
        raise RuntimeError("prodGrid not found")
    inner_start = start + len('<div class="prod-grid" id="prodGrid">')
    depth = 1
    pos = inner_start
    while pos < len(html) and depth > 0:
        next_open = html.find("<div", pos)
        next_close = html.find("</div>", pos)
        if next_close == -1:
            raise RuntimeError("unclosed prodGrid")
        if next_open != -1 and next_open < next_close:
            depth += 1
            pos = next_open + 4
        else:
            depth -= 1
            pos = next_close + len("</div>")
    return html[:start] + '<div class="prod-grid" id="prodGrid"></div>' + html[pos:]


def fix_admin_and_filters(html: str) -> str:
    html = html.replace(
        '<div class="admin-login-wrap" id="aLoginWrap" style="display: none">',
        '<div class="admin-login-wrap" id="aLoginWrap" style="display: flex">',
    )
    html = html.replace(
        '<div class="admin-dash" id="aDash" style="display: block">',
        '<div class="admin-dash" id="aDash" style="display: none">',
    )
    # Default filter matches JS curCat === "all"
    html = html.replace(
        '<button class="tag-btn" onclick="filterP(\'all\', this)">',
        '<button class="tag-btn on" onclick="filterP(\'all\', this)">',
        1,
    )
    html = html.replace(
        '<button class="tag-btn on" onclick="filterP(\'accessories\', this)">',
        '<button class="tag-btn" onclick="filterP(\'accessories\', this)">',
        1,
    )
    return html


def fix_absolute_img_paths(html: str) -> str:
    return html.replace('src="/img/', 'src="img/')


def main() -> None:
    raw = INDEX.read_text(encoding="utf-8")
    out = raw
    out = replace_long_hero_lines(out)
    out = replace_prod_grid(out)
    out = fix_admin_and_filters(out)
    out = fix_absolute_img_paths(out)
    INDEX.write_text(out, encoding="utf-8")
    print("OK:", INDEX, "size", INDEX.stat().st_size)


if __name__ == "__main__":
    main()
