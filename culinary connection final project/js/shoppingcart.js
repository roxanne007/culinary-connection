// Initialize an empty cart array or retrieve it from local storage
let shoppingCart = [];

// Function to add an ingredient to the cart
function addToCart(ingredient) {
  shoppingCart.push(ingredient);
  // You can add additional logic here, such as updating the UI to reflect the change.
  // Save the cart to local storage (optional)
  localStorage.setItem('cart', JSON.stringify(shoppingCart));
}

// Function to remove an item from the shopping cart by its index
function removeItemFromCart(index) {
  if (index >= 0 && index < shoppingCart.length) {
    shoppingCart.splice(index, 1);
    // You can optionally update the user interface to reflect the removal
    displayCart(); // Call the function to display the updated cart
  }
}

// Function to display the shopping cart content
function displayCart() {
  const cartListElement = document.getElementById('cart-list');

  // Clear the previous cart content
  cartListElement.innerHTML = '';

  // Retrieve the cart items from local storage (if available)
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  if (storedCart) {
    shoppingCart = storedCart;
  }

  // Loop through shoppingCart and create list items to display each item
  shoppingCart.forEach((item, index) => {
    const cartItemElement = document.createElement('li');
    cartItemElement.textContent = item;

    // Add a button to remove the item from the cart
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-from-cart-button');
    removeButton.dataset.index = index;

    // Add a click event listener to the remove button
    removeButton.addEventListener('click', () => {
      removeItemFromCart(index);
      displayCart(); // Update the cart content after removal
    });

    // Append the remove button to the cart item
    cartItemElement.appendChild(removeButton);

    // Append the cart item to the cart list
    cartListElement.appendChild(cartItemElement);
  });
}

// Function to get ingredient text from the recipe based on index
function getIngredientFromRecipe(index) {
  const ingredients = document.querySelectorAll('#ingredients-list span');
  if (index >= 0 && index < ingredients.length) {
    return ingredients[index].textContent.trim();
  }
  return ''; // Return an empty string if the index is out of bounds
}

// Event listener to add items to the shopping cart when "Add to Cart" buttons are clicked
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const ingredient = getIngredientFromRecipe(index);
    addToCart(ingredient);
    console.log("Button clicked"); // Add this line for debugging
  });
});

// Find the cart-trigger element
const cartTrigger = document.getElementById('cart-trigger');

// Add a click event listener to the cart button
cartTrigger.addEventListener('click', () => {
  // Redirect the user to the shopping cart page
  window.location.href = 'cart.html'; // Replace 'cart.html' with your actual cart page URL
});

// Call the displayCart function to initially display the cart items
displayCart();
