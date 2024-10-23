const burger = document.querySelector(".headerBurger");
const aside = document.querySelector(".aside");
const main = document.querySelector(".main");
const closeBurger = document.querySelector(".closeBurgerImg");
const navButtonsMobileScreen = document.querySelector(
  ".navButtonsMobileScreen"
);

burger.addEventListener("click", () => {
  aside.classList.add("active");
  navButtonsMobileScreen.style.display = "flex";
  closeBurger.style.display = "block";
  main.style.display = "none";
});

closeBurger.addEventListener("click", () => {
  aside.classList.remove("active");
  navButtonsMobileScreen.style.display = "none";
  main.style.display = "block";
  closeBurger.style.display = "none";
});
