document.addEventListener("DOMContentLoaded", function () {
  // Select all product cards
  const productCards = document.querySelectorAll(".card");
  const ordersInactive = document.querySelector(".ordersInactive");
  const ordersActive = document.querySelector(".ordersActive");

  let cartItems = [];

  productCards.forEach((productCard) => {
    const addToCartBtn = productCard.querySelector(".addToCart");
    const content = productCard.querySelector(".content");
    const selected = productCard.querySelector(".selected");

    addToCartBtn.addEventListener("click", () => {
      incrementAmount();
    });

    // --- increment and decrement cart ---
    const decrementButton = productCard.querySelector("#decrement");
    const incrementButton = productCard.querySelector("#increment");
    const amountDisplay = productCard.querySelector("#amount");
    const orderButton = productCard.querySelector(".order");

    let amount = Number(amountDisplay.textContent, 10);

    const productDetails = {
      name: productCard.querySelector(".dessertName").textContent,
      price: parseFloat(
        productCard.querySelector(".price").textContent.slice(1)
      ),
      quantity: amount,
      element: productCard,
    };

    function decrementAmount() {
      amount -= 1;

      if (amount === 0) {
        cartItems = cartItems.filter(
          (product) => product.name !== productDetails.name
        );

        // Reset the UI for the corresponding product card
        orderButton.classList.add("hidden");
        addToCartBtn.classList.remove("hidden");
        selected.classList.remove(
          "border-[3px]",
          "border-solid",
          "img-border-color"
        );

        // Check for the last item in the cart
        if (cartItems.length === 0) {
          ordersActive.classList.add("hidden");
          ordersActive.classList.remove("flex-row");
          ordersInactive.classList.remove("hidden");
        }
      } else {
        const productInCart = cartItems.find(
          (product) => product.name === productDetails.name
        );
        productInCart.quantity = amount;
      }

      updateUI();
    }

    function incrementAmount() {
      amount += 1;

      const productInCart = cartItems.find(
        (product) => product.name === productDetails.name
      );

      if (productInCart) {
        productInCart.quantity = amount;
      } else {
        cartItems.push({
          ...productDetails,
          quantity: amount,
        });
      }

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
        ordersActive.classList.remove("hidden");
        ordersActive.classList.add("flex-row");
        ordersInactive.classList.add("hidden");
      }
      amountDisplay.textContent = amount;

      updateCartUI();
    }
  });

  // updating cart
  const cartItemCount = document.querySelector(".cart span");
  const cartItemList = document.querySelector(".cart-items");
  const cartTotal = document.querySelector(".cartTotal");

  function updateCartUI() {
    updateCartItemCount(cartItems.length);
    updateCartItemList();
    updateCartTotal();
  }

  function updateCartItemCount(count) {
    cartItemCount.textContent = count;
  }

  function updateCartItemList() {
    cartItemList.innerHTML = "";
    cartItems.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item", "individual-cart-item");
      cartItem.innerHTML = `
      <p class="font-semibold text-sm text-color mb-1 mt-6">${item.name}</p>
      <span class="text-[15px] font-bold flex-row cart-color">${
        item.quantity
      }x</span>
      <span class="cart-item-price opacity-50 text-color font-semibold text-sm ml-[7px] mr-[3px]">@$${item.price.toFixed(
        2
      )}</span>
      <span class="item-total opacity-80 font-semibold text-color text-sm">$${(
        item.price * item.quantity
      ).toFixed(2)}</span>
      <button data-index="${index}" class="remove-btn"><img class="pl-auto" src="./images/icon-remove-item.svg" alt=""></button>
      `;

      cartItemList.append(cartItem);
    });

    function removeItemFromCart(index) {
      const removedItem = cartItems[index];

      const productCard = removedItem.element;
      const orderButton = productCard.querySelector(".order");
      const addToCartBtn = productCard.querySelector(".addToCart");
      const selected = productCard.querySelector(".selected");
      const amountDisplay = productCard.querySelector("#amount");

      // Reset UI for the removed item
      orderButton.classList.add("hidden");
      addToCartBtn.classList.remove("hidden");
      selected.classList.remove(
        "border-[3px]",
        "border-solid",
        "img-border-color"
      );

      // Remove the specific item from cartItems array
      cartItems = cartItems.filter((_, i) => i !== index);

      // Hides or show the ordersActive/ordersInactive based on remaining cart items
      if (cartItems.length === 0) {
        ordersActive.classList.add("hidden");
        ordersActive.classList.remove("flex-row");
        ordersInactive.classList.remove("hidden");
      }

      updateCartUI();
    }

    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.currentTarget.dataset.index;
        removeItemFromCart(Number(index));
      });
    });
  }

  // update total amount of orders made
  function updateCartTotal() {
    const totalAmount = cartItems.reduce(
      (prev, curr) => (prev += curr.price * curr.quantity),
      0
    );
    cartTotal.textContent = `$${totalAmount.toFixed(2)}`;
  }
});
