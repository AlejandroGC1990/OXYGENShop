/*
En el name no se pueden usar nº.
https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation#la_api_de_validaci%C3%B3n_de_restricciones
*/

const form = document.getElementById("contact_form");
const email = document.getElementById("email");
const terms = document.getElementById("terms");
const emailError = email.nextElementSibling;

const numberPattern = /\d/;
const emailPattern =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  //Validar nameField
  const nameField = event.target.elements["nameField"];
  const nameFieldError = nameField.nextElementSibling;
  
  // if (!numberPattern.test(nameField.value) || nameField.value.length < 2 || nameField.value.length > 100){
  if (nameField.value.length < 2 || nameField.value.length > 100){
    nameField.classList.add("invalid");
    nameFieldError.classList.add(" active");
  } else {
    // nameFieldError.classList.remove("active");
    nameField.classList.remove("invalid");
  }
  
  //Validar email
  const email = event.target.elements["email"];
  if (!emailPattern.test(email.value)) {
    email.classList.add("invalid");
  } else {
    email.classList.remove("invalid");
  };
  
  //Validar checkbox
  const terms = event.target.elements["terms"];
  if(!terms.checked){
    terms.classList.add("invalidCheckbox");
  } else {
  terms.classList.remove("invalidCheckbox");
  }
});