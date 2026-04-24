let tT;
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("on");
  clearTimeout(tT);
  tT = setTimeout(() => t.classList.remove("on"), 3000);
}
