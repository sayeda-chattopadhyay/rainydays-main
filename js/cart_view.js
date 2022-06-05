const cartItems = JSON.parse(localStorage.getItem("cartList"));

const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

console.log(cartItems);

let total = 0;

cartItems.forEach(function (cartElement) {
  total += cartElement.price;

  cartContainer.innerHTML += `<div class ="cart-item">
        <div style="background-image: url(${cartElement.imgsrc})" class ="cart-image-view"></div>
        <div class ="cart-text">
            <div>
                <h4>${cartElement.name}</h4>
            </div>
                <div><p>Price : ${cartElement.price}kr</p></div>           
            </div>
    </div>`;
});

totalContainer.innerHTML = `Total : ${total}`;
