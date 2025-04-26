import "../scss/app.scss";

import "./active_menu.js";
import "./project.js";
import "./type.js";

// Header Menu
{
  const siteMenuContent = document.querySelector(".site-menu__content");
  const toggleMenu = document.querySelector(".site-header__toggle");
  const toggleMenuItems = siteMenuContent.querySelectorAll(".site-menu__link");

  toggleMenu.addEventListener("click", () => {
    siteMenuContent.classList.toggle("site-menu__content--open");
  });

  toggleMenuItems.forEach((toggleMenuItem) => {
    toggleMenuItem.addEventListener("click", () => {
      siteMenuContent.classList.remove("site-menu__content--open");
    });
  });
}

// Header
{
  const siteHeader = document.querySelector(".site-header");
  const siteHeaderHeight = siteHeader.offsetHeight;

  document.addEventListener("scroll", () => {
    if (window.scrollY > siteHeaderHeight) {
      siteHeader.classList.add("site-header--dark");
    } else {
      siteHeader.classList.remove("site-header--dark");
    }
  });
}

// Arrow up
{
  const home = document.querySelector(".home");
  const homeHeight = home.offsetHeight;
  const arrowUp = document.querySelector(".arrow-up__button");

  document.addEventListener("scroll", () => {
    if (window.scrollY > homeHeight / 2) {
      arrowUp.classList.add("arrow-up__button--active");
    } else {
      arrowUp.classList.remove("arrow-up__button--active");
    }
  });
}

// Home
{
  const homeContainer = document.querySelector(".home__container");
  const homeContainerHeight = homeContainer.offsetHeight;

  document.addEventListener("scroll", () => {
    homeContainer.style.opacity = 1 - window.scrollY / homeContainerHeight;
  });
}
