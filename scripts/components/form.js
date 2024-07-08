/*
https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation#la_api_de_validaci%C3%B3n_de_restricciones
*/

const form = document.getElementById("contact_form");
const nameField = document.getElementById("nameField");
const email = document.getElementById("email");
const terms = document.getElementById("terms");

const nameFieldError = nameField.nextElementSibling;
const emailError = email.nextElementSibling;

const emailPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

