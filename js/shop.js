function renderProds(cat = "all", search = "") {
  const g = document.getElementById("prodGrid");
  const list = PRODUCTS.filter(
    (p) =>
      (cat === "all" || p.cat === cat) &&
      (!search || p.name.includes(search) || p.desc.includes(search)),
  );
  if (!list.length) {
    g.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:5rem;color:var(--muted)"><div style="font-size:3rem;margin-bottom:1rem">✦</div>مفيش منتجات</div>`;
    return;
  }
  const tagLabel = {
    bestseller: "الأكثر طلباً",
    hot: "🔥 تميز",
    new: "جديد ✦",
  };
  g.innerHTML = list
    .map(
      (p) => `
    <div class="prod-card">
      <div class="prod-img-wrap">
        <img src="img/${p.img}.jpeg" loading="lazy" alt="${p.name}" style="cursor: pointer" onclick="openImg(this.src)"/>
        ${p.tag ? `<span class="prod-tag ${p.tag}">${tagLabel[p.tag] || p.tag}</span>` : ""}
      </div>
      <div class="prod-info">
        <div class="prod-name">${p.name}</div>
        <div class="prod-desc">${p.desc}</div>
        <div class="prod-foot">
          <div class="prod-price">${p.price}<small> جنيه</small></div>
        </div>
      </div>
    </div>`,
    )
    .join("");
}

function filterP(cat, btn) {
  curCat = cat;
  document.querySelectorAll(".tag-btn").forEach((b) => b.classList.remove("on"));
  btn.classList.add("on");
  renderProds(cat, document.getElementById("srch")?.value || "");
}

function searchP(v) {
  renderProds(curCat, v);
}
