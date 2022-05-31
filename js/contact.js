const contactForm = document.querySelector("#contact-Form");

contactForm.onsubmit = function () {
  event.preventDefault();

  console.log(event);

  const name = document.querySelector("#first_name");

  console.log(name.value);
};

// const firstName = document.querySelector("#first_name");
// const firstNameError = document.querySelector("#first-name-error");

// const email = document.querySelector("#email");
// const emailError = document.querySelector("#email-error");

// const button = document.querySelector("button");

// function formValidation() {
//     event.preventDefault();

//   if (checkLength(firstName.value, 0) === true) {
//     firstNameError.style.display = "none";
//   } else {
//     firstNameError.style.display = "block";
//   }

//   if (emailValidation(email.value) === true) {
//     emailError.style.display = "none";
//   } else {
//     emailError.style.display = "block";
//   }
// }

// contactForm.addEventListener("submit", formValidation);

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
