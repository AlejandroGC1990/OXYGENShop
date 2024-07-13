document.addEventListener("DOMContentLoaded", () => {
  const back = document.querySelector(".back");
  const modal = document.querySelector("#modalPopUp .back__modal");
  const closeModalX = document.getElementById("closeModalX");
  const form = document.getElementById("modalForm");
  const emailInput = document.getElementById("emailContact");

  //mostrar modal
  const showModal = () => {
    if (!sessionStorage.getItem("modalClosed")) {
      back.classList.add("Up");
      modal.classList.add("Up");
    }
  };

  //cerrar modal y almacenar sessionStorage
  const closeModal = () => {
    back.classList.remove("Up");
    modal.classList.remove("Up");
    sessionStorage.setItem("modalClosed", "true");
  };

  //mostrar modal tras 5s
  setTimeout(showModal, 5000);

  //mostrar modal tras scrolear 25% de la página
  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight * 0.25
    ) {
      showModal();
    }
  });

  //cerrar modal
  const handleCloseModal = (event) => {
    if (
      (event.type === "click" &&
        (event.target === closeModalX ||
          event.target === modal ||
          event.target === back)) ||
      (event.type === "keydown" && event.key === "Escape")
    ) {
      closeModal();
    }
  };

  //escuchadores de eventos
  closeModalX.addEventListener("click", handleCloseModal);
  window.addEventListener("click", handleCloseModal);
  document.addEventListener("keydown", handleCloseModal);

  // Validar y enviar el formulario del modal
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validar emailContact
    const emailContact = emailInput.value.trim();
    const emailContactError = document.getElementById("emailContactError");

    const emailContactPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailContactPattern.test(emailContact)) {
      emailInput.classList.add("invalid");
      emailContactError.classList.add("active");
    } else {
      emailInput.classList.remove("invalid");
      emailContactError.classList.remove("active");

      // Enviar datos del formulario a la API de prueba
      const apiTesting = "https://jsonplaceholder.typicode.com/posts";

      fetch(apiTesting, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailContact,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          alert("Data sent correctly.");
          console.log(json);
        })
        .catch((error) => {
          alert("Error sending data. Please try again.");
          console.error("Error:", error);
        });

      // Cerrar modal después de enviar
      closeModal();
    }
  });
});
