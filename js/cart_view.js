const cartItems = JSON.parse(localStorage.getItem("cartList"));


const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

console.log(cartItems);


let total = 0 ;

cartItems.forEach(function(cartElement){
    total += cartElement.price;

    cartContainer.innerHTML +=
    `<div class ="cart-item">
        <div style="background-image: url(${cartElement.imgsrc})" class ="cart-image"></div>
        <h4>${cartElement.name}</h4>
        <h4>${cartElement.price}</h4>
    </div>`;


})

totalContainer.innerHTML = `Total : ${total}`;