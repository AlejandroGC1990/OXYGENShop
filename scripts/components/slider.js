//meterle los puntos de previsualización de cantidad de fotos
//que se cambien las fotos cada 5 segundos

let img = [
    "../../images/slider_img1.jpg",
    "../../images/slider_img2.jpg",
    "../../images/slider_img3.jpg",
    "../../images/slider_img4.jpg",
    "../../images/slider_img5.jpg",
    "../../images/slider_img6.jpg"
];
document.img.src = img[0];

let counter = 0;
let sliderRight = document.querySelector(".right");
let sliderLeft = document.querySelector(".left");
let sliderImg = document.querySelector(".slider__screen img");

const moveRight = () => {
    counter++;
console.log(counter)
    if (counter >= img.length) {
        counter = 0;
    }

    sliderImg.src = img[counter];
}

const moveLeft = () => {
    counter--;
console.log(counter)
    if (counter < 0) {
        counter = img.length -1;
    }

    sliderImg.src = img[counter];
}

sliderRight.addEventListener("click", moveRight);
sliderLeft.addEventListener("click", moveLeft);