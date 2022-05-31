const contactForm = document.querySelector("contact-form");

const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");

const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const contactNumber = document.querySelector("#contact-number");
const contactNumberError = document.querySelector("#contact-number-error");

const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

const button = document.querySelector("button");

function formValidation() {
  console.log("hello");
  //   event.preventDefault();

  //   if (checkLength(name.value, 0) === true) {
  //     nameError.style.display = "none";
  //   } else {
  //     nameError.style.display = "block";
  //   }

  //   if (checkLength(address.value, 24) === true) {
  //     addressError.style.display = "none";
  //   } else {
  //     addressError.style.display = "block";
  //   }

  //   if (emailValidation(email.value) === true) {
  //     emailError.style.display = "none";
  //   } else {
  //     emailError.style.display = "block";
  //   }
  //   if (checkLength(message.value, 24) === true) {
  //     messageError.style.display = "none";
  //   } else {
  //     messageError.style.display = "block";
  //   }
}

contactForm.addEventListener("submit", formValidation);

// function checkLength(value, len) {
//   if (value.trim().length > len) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function emailValidation(email) {
//   const regEx = /\S+@\S+\.\S+/;
//   const patternCheck = regEx.test(email);
//   return patternCheck;
// }
