const btn = document.querySelector(".nav-icon-btn");
const icon = document.querySelector(".nav-icon");
const menu = document.querySelector(".header__top-row");

btn.addEventListener("click", () => {
  icon.classList.toggle("nav-icon--active");
  menu.classList.toggle("header__top-row--mobile");

  document.body.classList.toggle("no-scroll");
});
