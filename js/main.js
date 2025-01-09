import mask from "./libs/phoneMask/mask.js";

const btn = document.querySelector(".nav-icon-btn");
const icon = document.querySelector(".nav-icon");
const menu = document.querySelector(".header__top-row");

btn.addEventListener("click", () => {
  icon.classList.toggle("nav-icon--active");
  menu.classList.toggle("header__top-row--mobile");

  document.body.classList.toggle("no-scroll");
});

//phone mask
mask("[data-tel]"); //пошук по атрибуту

const inputs = document.querySelectorAll("[data-tel]");
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = "";
  });
});
