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
  const activeButton = document.querySelector(".work-category__item--selected");
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
