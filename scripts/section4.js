const form = document.getElementById("contact_form");


//VALIDACIÓN DEL FORMULARIO SECCIÓN4
form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  //Validar nameContact
  const nameContact = event.target.elements["nameContact"];
  const nameContactError = document.getElementById("nameContactError");
  
  const numberPattern = /\d/; //regex para comprobar que no hay números en el name

  if (
    numberPattern.test(nameContact.value) || //Condición para comprobar si hay número
    nameContact.value.length < 2 ||
    nameContact.value.length > 100
  ) {
    nameContact.classList.add("invalid"); 
    nameContactError.classList.add("active");
  } else if (
    !numberPattern.test(nameContact.value) &&
    nameContact.value.length > 1 &&
    nameContact.value.length < 100 &&
    nameContact.classList.contains("invalid")
  ) {
    nameContact.classList.remove("invalid");
    nameContactError.classList.remove("active");
  }
  
  //Validar emailContact
  const emailContact = event.target.elements["emailContact"];
  const emailContactError = document.getElementById("emailContactError");
  
  const emailContactPattern = /*Regex para comprobar si el email es válido*/
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (!emailContactPattern.test(emailContact.value)) { //Si el mail NO es válido, añade alertas.
    emailContact.classList.add("invalid");
    emailContactError.classList.add("active");
  } else {
    emailContact.classList.remove("invalid");
    emailContactError.classList.remove("active");
  }
  
  //Validar checkbox
  const terms = event.target.elements["terms"];
  const termsError = document.getElementById("termsError");
  if (!terms.checked) {
    terms.classList.add("invalidCheckbox");
    termsError.classList.add("active");
  } else {
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
