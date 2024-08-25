document.addEventListener("DOMContentLoaded", function () {
  // Select all toggle containers
  const toggleContainers = document.querySelectorAll(".card");

  toggleContainers.forEach((container) => {
    const button = container.querySelector(".toggleButton");
    const content = container.querySelector(".content");
    const active = container.querySelector(".active");
    const selected = container.querySelector(".selected");
    button.addEventListener("click", function () {
      // Toggle the visibility of the content
      content.classList.remove("hidden");
      content.classList.add("flex");
      button.classList.add("hidden");
      selected.classList.add("border-[3px]", "border-solid", "img-border-color");
    });

    active.addEventListener("click", function () {
        // Toggle the visibility of the content
      content.classList.remove("flex");
      content.classList.add("hidden");
      button.classList.remove("hidden");
      selected.classList.remove("border-[3px]", "border-solid", "img-border-color");
    });
  });
});
