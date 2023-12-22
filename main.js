let center = document.getElementById("center");
let latar = document.getElementById("latar");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  center.style.top = value * 1.05 + "px";
});
