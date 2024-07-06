/*
https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation#la_api_de_validaci%C3%B3n_de_restricciones
//! ME FALTA VALIDAR EL NAMEEEEEEEEEEEEE Y EL CHECKBOX!!!!!!!
*/

const name = document.getElementById("name");
const email = document.getElementById("email");
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//validar input email
email.addEventListener('input', (event) => {
    if (email.value === '') {
        email.setCustomValidity('The e-mail field cannot be empty.');
    } else if (!emailPattern.test(email.value)) {
        email.setCustomValidity('Please enter a valid e-mail address.');
    } else {
        email.setCustomValidity('');
    }
    email.reportValidity();
})

//validar formulario
const form = document.getElementById('contact_form');
form.addEventListener('submit', (event) => {
    if(!emailPattern.test(email.value)) {
        email.classList.add('invalid');
        email.setCustomValidity('Please enter a valid e-mail address.');
        email.reportValidity();
        email.preventDefault();
    } else {
        email.classListremove('invalid');
        email.setCustomValidity('');
    }
});