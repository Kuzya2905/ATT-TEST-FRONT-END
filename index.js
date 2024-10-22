const burger = document.querySelector(".headerBurger");
const aside = document.querySelector(".aside");
const main = document.querySelector(".main");
const closeBurger = document.querySelector(".closeBurgerImg");

burger.addEventListener("click", () => {
  aside.classList.add("active");
  closeBurger.style.display = "block";
  main.style.display = "none";
});

closeBurger.addEventListener("click", () => {
  aside.classList.remove("active");
  main.style.display = "block";
  closeBurger.style.display = "none";
});
