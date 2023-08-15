var docWidth = document.documentElement.offsetWidth;
[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});
const navigationBar = document.querySelector(".navigation");
const burgerMenuButton = document.querySelector(".burger");

function burgerMenuToggle() {
  if (navigationBar.classList.contains("navigation--open")) {
    burgerMenuButton.classList.add("button--closed");
  } else {
    burgerMenuButton.classList.remove("button--closed");
  }
}

burgerMenuButton.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    navigationBar.classList.toggle("navigation--open");
    burgerMenuToggle();
  }
});

navigationBar.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    navigationBar.classList.add("navigation--open");
  } else navigationBar.classList.remove("navigation--open");
});
