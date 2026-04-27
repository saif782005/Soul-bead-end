function openImg(src) {
  const modMask = document.getElementById("imgModMask");
  const modImg = document.getElementById("imgModBody");
  modImg.src = src;
  modMask.style.display = "flex";
}

function closeImg() {
  document.getElementById("imgModMask").style.display = "none";
}

renderCategories();

const decorBtn = document.querySelector(".tag-btn[onclick*='decor']");
if (decorBtn) filterP('decor', decorBtn);
else renderProds('decor');
