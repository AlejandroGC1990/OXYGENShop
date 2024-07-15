//meterle los puntos de previsualización de cantidad de fotos
//que se cambien las fotos cada 5 segundos

let img = [
  "../../images/slider_img1.jpg",
  "../../images/slider_img2.jpg",
  "../../images/slider_img3.jpg",
  "../../images/slider_img4.jpg",
  "../../images/slider_img5.jpg",
  "../../images/slider_img6.jpg",
];

document.querySelector(".slider__screen img").src = img[0];

let counter = 0;
let sliderRight = document.querySelector(".right");
let sliderLeft = document.querySelector(".left");
let sliderImg = document.querySelector(".slider__screen img");
let indicatorsContainer = document.querySelector(
  ".slider__indicatorsContainer"
);

//actualizar slider
const updateSlider = () => {
  sliderImg.src = img[counter];
  let indicators = document.querySelectorAll(
    ".slider__indicatorsContainer__indicator"
  );
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === counter);
  });
};

// añadir indicadores
for (let i = 0; i < img.length; i++) {
  let indicator = document.createElement("div");
  indicator.classList.add("slider__indicatorsContainer__indicator");

  if (i === 0) {
    indicator.classList.add("active");
  }

  indicator.addEventListener("click", () => {
    counter = i;
    updateSlider();
    clearInterval(autoSlider);
    autoSlider = setInterval(moveRight, 5000);
  });
  indicatorsContainer.appendChild(indicator);
}

const indicators = document.querySelectorAll(
  ".slider__indicatorsContainer__indicator"
);

// reiniciar el intervalo al hacer clic en el botón izquierdo
sliderLeft.addEventListener("click", () => {
  clearInterval(autoSlider);
  moveLeft();
  autoSlider = setInterval(moveRight, 5000);
});

//reiniciar el intervalo al hacer clic en el botón derecha
sliderRight.addEventListener("click", () => {
  clearInterval(autoSlider);
  moveRight();
  autoSlider = setInterval(() => {
    moveRight();
  }, 5000);
});

//mover a la siguiente imagen
const moveRight = () => {
  counter++;
  console.log(counter);
  if (counter >= img.length) {
    counter = 0;
  }

  sliderImg.src = img[counter];
};

//mover a la imagen anterior
const moveLeft = () => {
  counter--;
  console.log(counter);
  if (counter < 0) {
    counter = img.length - 1;
  }

  sliderImg.src = img[counter];
};

// Cambiar las fotos cada 5 segundos
let autoSlider = setInterval(() => {
  moveRight();
}, 10000);

sliderRight.addEventListener("click", moveRight);
sliderLeft.addEventListener("click", moveLeft);
