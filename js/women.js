import { jacketArray } from "./constants/productList.js";
// const productsContainer = document.querySelector(".products");

// const url = "https://sub.flopow.one/wp-json/wc/store/products";
const productsContainer = document.querySelector(".women-jackets");

const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

let cartArray = [];

// // console.log(jacketArray);

// async function getProducts() {
//   try {
//     const response = await fetch(url);
//     const getResults = await response.json();
//     createHTML(getResults);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getProducts();

// function createHTML(products) {
//   products.forEach(function (product) {
//     console.log(product);
//     productContainer.innerHTML += `<div class="jacketList">
//                                         <img src ="${product.images[0].src}" alt="${product.name}">
//                                         <h2>${product.name}</h2>
//                                         <h2> Color : ${product.color}</h2>
//                                         <h3> Price : ${product.price}</h3>
//                                         <div class="jacketwrapp1">
//                                         <div class="text1">
//                                           <div class="star_ratings">
//                                             <i class="fas fa-star"></i>
//                                             <i class="fas fa-star"></i>
//                                             <i class="fas fa-star"></i>
//                                             <i class="fas fa-star"></i>
//                                             <i class="fas fa-star-half-alt"></i>
//                                           </div>
//                                           <p>${product.description}</p>
//                                         </div>
//                                       </div>
//                                       <button class ="cta" data-product="${product.id}">Add to cart</button>
//                                     </div>``;
//   });
// }

jacketArray.forEach(function (product) {
  productsContainer.innerHTML += ` 
  <div class="jacketList">
        <img src="${product.imgsrc}" alt ="${product.name}">
        <h2>${product.name}</h2>
        <h2> Color : ${product.color}</h2>
        <h3> Price : ${product.price}</h3>
        <div class="jacketwrapp1">
        <div class="text1">
          <div class="star_ratings">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <p>${product.description}</p>
        </div>
      </div>
      <button class ="cta" data-product="${product.id}">Add to cart</button>
    </div>`;
});

const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.onclick = function (event) {
    // cartArray.push(event.target.dataset.product);
    const itemToAdd = jacketArray.find(
      (item) => item.id === event.target.dataset.product
    );
    cartArray.push(itemToAdd);
    showCart(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));

    // console.log(cartArray)
    // cartArray.push(event.target.dataset.product);

    // const itemToAdd = jacketArray.find(
    //   (item) => item.id === event.target.dataset.product
    // );

    // cartArray.push(itemToAdd);
    // showCart(cartArray);

    // console.log(cartArray);
    // // cartArray.push(event.target.dataset.product);
    // const itemToAdd = jacketArray.find(
    //   (item) => item.id === event.target.dataset.product
    // );
    // cartArray.push(itemToAdd);
    // console.log(cartArray);
  };
});

function showCart(cartItems) {
  cart.style.display = "flex";
  cartList.innerHTML = "";
  let total = 0;
  cartItems.forEach(function (cartElement) {
    total += cartElement.price;

    cartList.innerHTML += `<div class ="cart-item">
            <div style="background-image: url(${cartElement.imgsrc})" class ="cart-image"></div>
            <h4>${cartElement.name}</h4>
            <h4>${cartElement.price}</h4>
        </div>`;
  });

  totalContainer.innerHTML = `Total: ${total}`;
}
