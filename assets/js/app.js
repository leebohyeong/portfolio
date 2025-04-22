// header
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

// home
{
  const homeContainer = document.querySelector(".home__container");
  const homeContainerHeight = homeContainer.offsetHeight;

  document.addEventListener("scroll", () => {
    homeContainer.style.opacity = 1 - window.scrollY / homeContainerHeight;
  });
}
