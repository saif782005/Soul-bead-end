function showP(p) {
  document.querySelectorAll(".page").forEach((x) => x.classList.remove("on"));
  document.getElementById("p-" + p).classList.add("on");
  document.querySelectorAll(".nav-pill").forEach((b) => b.classList.remove("on"));
  const m = { home: 0, shop: 1 };
  if (m[p] !== undefined)
    document.querySelectorAll(".nav-pill")[m[p]]?.classList.add("on");
  if (p === "shop") {
    const decorBtn = document.querySelector(".tag-btn[onclick*='decor']");
    if (decorBtn) filterP('decor', decorBtn);
    else renderProds('decor');
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  document.getElementById("nav").classList.toggle("scrolled", window.scrollY > 20);
  document.getElementById("upBtn").classList.toggle("on", window.scrollY > 300);
});
