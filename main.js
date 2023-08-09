const navigationBar = document.querySelector(".navigation");
const burgerMenuButton = document.querySelector(".burger");

function burgerMenuToggle() {
  if (navigationBar.classList.contains("navigation--open")) {
    navigationBar.classList.add("button--closed");
    navigationBar.classList.remove("button--open");
  } else {
    navigationBar.classList.add("button--open");
    navigationBar.classList.remove("button--closed");
  }
}

burgerMenuButton = document.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    navigationBar.classList.toggle("navigation--open");
    burgerMenuToggle();
  }
});
{
}
