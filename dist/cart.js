document.addEventListener("DOMContentLoaded", function () {
  // Select all toggle containers
  const toggleContainers = document.querySelectorAll(".card");

  toggleContainers.forEach((container) => {
    const addToCartBtn = container.querySelector(".toggleButton");
    const content = container.querySelector(".content");
    const selected = container.querySelector(".selected");

    addToCartBtn.addEventListener("click", incrementAmount);

    // --- adding to cart ---
    const decrementButton = container.querySelector("#decrement");
    const incrementButton = container.querySelector("#increment");
    const amountDisplay = container.querySelector("#amount");
    const orderButton = container.querySelector(".order");

    let amount = Number(amountDisplay.textContent, 10);

    function decrementAmount() {
      amount -= 1;
      updateUI();
    }

    function incrementAmount() {
      amount += 1;
      updateUI();
    }

    decrementButton.addEventListener("click", decrementAmount);
    incrementButton.addEventListener("click", incrementAmount);

    function updateUI() {
      if (amount > 0) {
        content.classList.remove("hidden");
        content.classList.add("flex");
        addToCartBtn.classList.add("hidden");
        selected.classList.add(
          "border-[3px]",
          "border-solid",
          "img-border-color"
        );
      } else {
        orderButton.classList.add("hidden");
        addToCartBtn.classList.remove("hidden");
        selected.classList.remove(
          "border-[3px]",
          "border-solid",
          "img-border-color"
        );
      }
      amountDisplay.textContent = amount;
    }
  });
});
