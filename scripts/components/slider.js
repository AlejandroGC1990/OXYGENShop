class Slider {
  constructor(img, slideClass, slidesClass, indicatorsClass) {
    this.img = img;
    this.currentIndex = 0;
    this.slideImg = document.querySelector(slideClass);
    this.indicatorsContainer = document.querySelector(indicatorsClass);
    this.initSlider();
    this.autoSlider = setInterval(() => this.moveRight(), 5000);
    this.addEventListeners();
  }

  initSlider() {
    // Iniciar con la primera imagen
    this.slideImg.src = this.img[this.currentIndex];

    // Crear indicadores
    this.img.forEach((image, index) => {
      let indicator = document.createElement("div");
      indicator.classList.add("slider__indicatorsContainer__indicator");
      if (index === this.currentIndex) {
        indicator.classList.add("active");
      }
      indicator.addEventListener("click", () => {
        this.currentIndex = index;
        this.updateSlider();
        clearInterval(this.autoSlider);
        this.autoSlider = setInterval(() => this.moveRight(), 5000);
      });
      this.indicatorsContainer.appendChild(indicator);
    });

    this.updateIndicators();
  }

  addEventListeners() {
    document.querySelector(".left").addEventListener("click", () => {
      clearInterval(this.autoSlider);
      this.moveLeft();
      this.autoSlider = setInterval(() => this.moveRight(), 5000);
    });

    document.querySelector(".right").addEventListener("click", () => {
      clearInterval(this.autoSlider);
      this.moveRight();
      this.autoSlider = setInterval(() => this.moveRight(), 5000);
    });
  }

  updateIndicators() {
    let indicators = document.querySelectorAll(
      ".slider__indicatorsContainer__indicator"
    );
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === this.currentIndex);
    });
  }

  updateSlider() {
    this.slideImg.src = this.img[this.currentIndex];
    this.updateIndicators();
  }

  moveRight() {
    this.currentIndex++;
    if (this.currentIndex >= this.img.length) {
      this.currentIndex = 0;
    }
    this.updateSlider();
  }

  moveLeft() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.img.length - 1;
    }
    this.updateSlider();
  }
}

// Uso del slider
let img = [
  "./images/slider_img1.jpg",
  "./images/slider_img2.jpg",
  "./images/slider_img3.jpg",
  "./images/slider_img4.jpg",
  "./images/slider_img5.jpg",
  "./images/slider_img6.jpg",
];

const mySlider = new Slider(
  img,
  ".slider__screen img",
  ".slider__screen",
  ".slider__indicatorsContainer"
);