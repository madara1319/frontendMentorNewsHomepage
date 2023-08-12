const navigationBar = document.querySelector(".navigation");
const burgerMenuButton = document.querySelector(".burger");

function burgerMenuToggle() {
  if (navigationBar.classList.contains("navigation--open")) {
    burgerMenuButton.classList.add("button--closed");
  } else {
    burgerMenuButton.classList.remove("button--closed");
  }
}

burgerMenuButton = document.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    navigationBar.classList.toggle("navigation--open");
    burgerMenuToggle();
  }
});

burgerMenuButton = document.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    navigationBar.classList.add("navigation--open");
  }
});
