/*
En el name no se pueden usar nº.
https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation#la_api_de_validaci%C3%B3n_de_restricciones
*/

console.log("working");
const form = document.getElementById("contact_form");
console.log(form);

const numberPattern = /\d/;

//VALIDACIÓN DEL FORMULARIO SECCIÓN4
form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  //Validar nameContact
  const nameContact = event.target.elements["nameContact"];
  const nameContactError = document.getElementById("nameContactError");

  if (
    numberPattern.test(nameContact.value) ||
    nameContact.value.length < 2 ||
    nameContact.value.length > 100
  ) {
    nameContact.classList.add("invalid");
    nameContactError.classList.add("active");
    console.log("aquí");
  } else if (
    !numberPattern.test(nameContact.value) &&
    nameContact.value.length > 2 &&
    nameContact.value.length < 100 &&
    nameContact.classList.contains("invalid")
  ) {
    console.log("hola");
    nameContact.classList.remove("invalid");
    nameContactError.classList.remove("active");
  }
  
  //Validar emailContact
  const emailContact = event.target.elements["emailContact"];
  const emailContactError = document.getElementById("emailContactError");
  console.log(emailContact);
  const emailContactPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (!emailContactPattern.test(emailContact.value)) {
    emailContact.classList.add("invalid");
    emailContactError.classList.add("active");
    console.log("aquí2");
  } else {
    emailContact.classList.remove("invalid");
    emailContactError.classList.remove("active");
    console.log("hola2");
  }
  
  //Validar checkbox
  const terms = event.target.elements["terms"];
  const termsError = document.getElementById("termsError");
  if (!terms.checked) {
    console.log("aquí3");
    terms.classList.add("invalidCheckbox");
    termsError.classList.add("active");
  } else {
    console.log("hola3");
    terms.classList.remove("invalidCheckbox");
    termsError.classList.remove("active");
  }

  //ENVIAR DATOS DE CONTACTO DEL FORMULARIO
  // const contactInformation = new Contact(form);

  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   body: contactInformation
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
});
