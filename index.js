


document.addEventListener('DOMContentLoaded', () => {
    displayCart();
  });

  function addToCart(productName, price) {
    let cart = getCart();
    cart.push({ productName, price });
    setCart(cart);
    displayCart();
  }

//  dosra code hay 
let cart = [];
let isLoggedIn = false;
function addToCart (name,price,text){
  let item = {
      name : name,
      price : price,
      text :  text

  };
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
console.log(`${name}-$${price}-$${text}`);
alert("This article added to your cart login and place your order ");
const cartitems = document.getElementsByClassName("cart")[0].innerText
const updatedCart = Number(cartitems) + 1
document.getElementsByClassName("cart")[0].innerText = updatedCart
};
function checkInput(){
      window.location.href= "cart.html";
}
function checkOut() {
  if(isLoggedIn){
      window.location.href= "cart.html"
  }
  else{
      window.location.href= "signup.html"
  }
}
function displayCart() {
  let cart = getCart();
  let cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = '<h2>Shopping Cart</h2>';

  if (cart.length === 0) {
    cartContainer.innerHTML += '<p>Your cart is empty</p>';
    cartContainer.innerHTML += ' <a class="btn btn-primary " href="home.html">Continue Shopping </a> ';
  } else {
    let total = 0;

    cart.forEach((item, index) => {
      cartContainer.innerHTML += `
        <div class="product">
          <span>${item.name} - $${item.price}</span>
          <button onclick="removeFromCart(${index})">Remove</button>
          
        </div>
      `;
      total += item.price;
    });

    cartContainer.innerHTML += `<p>Total: $${total}</p>`;
    cartContainer.innerHTML += '<button onclick="clearCart()">Clear Cart</button>';




    

    
  }
}


// sirf yaha tak 

  function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    setCart(cart);
    displayCart();
  }

  function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
  }

  function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }

  function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  



  // is par working kerni hay 


  function updateCartDisplay() {
    // Clear existing items in the cart
    cartContainer.innerHTML = "";

    // Render each item in the cart
    cartItems.forEach(item => {
      const cartItem = document.createElement("li");
      cartItem.innerHTML = `
        <strong>${item.name}</strong>
        <br>
        <img src="${item.image}" alt="${item.name}">
        <p>${item.description}</p>
      `;
      cartContainer.appendChild(cartItem);
    });
  }