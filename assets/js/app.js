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

// Work
{
  const categoryButtons = document.querySelectorAll(".work-category__item");
  const projectContainer = document.querySelector(".work-projects");
  const projectItems = document.querySelectorAll(".work-projects__item");

  categoryButtons.forEach((categoryButton) => {
    categoryButton.addEventListener("click", (event) => {
      const filter = categoryButton.dataset.category;

      handleActiveSelection(event.target);
      filterProjects(filter);
    });
  });

  const handleActiveSelection = (target) => {
    const activeButton = document.querySelector(
      ".work-category__item--selected"
    );
    activeButton.classList.remove("work-category__item--selected");
    target.classList.add("work-category__item--selected");
  };

  const filterProjects = (filter) => {
    projectItems.forEach((projectItem) => {
      if (filter === "All" || filter === projectItem.dataset.type) {
        projectItem.style.display = "block";
      } else {
        projectItem.style.display = "none";
      }
    });

    projectContainer.classList.add("animation-out");

    setTimeout(() => {
      projectContainer.classList.remove("animation-out");
    }, 250);
  };
}
