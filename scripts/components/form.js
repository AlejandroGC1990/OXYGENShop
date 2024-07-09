/*
En el name no se pueden usar nº.
https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation#la_api_de_validaci%C3%B3n_de_restricciones
*/

const form = document.getElementById("contact_form");
const email = document.getElementById("email");
const terms = document.getElementById("terms");
const emailError = email.nextElementSibling;

const emailPattern =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  //Validar nameField
  const nameField = event.target.elements["nameField"];
  const nameFieldError = nameField.nextElementSibling;
  
  if (nameField.value.length < 2 || nameField.value.length > 100){
    nameField.classList.add("invalid");
    // nameFieldError.classList.remove("notVisible");
    // nameField.setCustomValidity("The name must be between 2 and 100 characters and not have numbers.");
  } else {
    // nameFieldError.classList.add("notVisible");
    nameField.classList.remove("invalid");
  }
  
  //Validar email
  const email = event.target.elements["email"];
  if (!emailPattern.test(email.value)) {
    email.classList.add("invalid");
    email.setCustomValidity("Please enter a valid email.");
  } else {
    email.classList.remove("invalid");
  };
  
  //Validar checkbox
  const terms = event.target.elements["terms"];
  if(!terms.checked){
    terms.classList.add("invalidCheckbox");
    terms.setCustomValidity("You must agree to terms and conditions.");
  } else {
  terms.classList.remove("invalidCheckbox");
  }
});