

var slides = document.querySelectorAll('.slider__item');
var slidesControl = document.querySelectorAll('.slider__control--radio i');
var arrLeft = document.querySelector(".slider__control--left");
var arrRight = document.querySelector(".slider__control--right");
var currentSlide = 0;

arrLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  slides[currentSlide].classList.toggle("visually-hidden");
  slidesControl[currentSlide].classList.toggle("active");
  currentSlide = (currentSlide-1+slides.length)%slides.length;
  slides[currentSlide].classList.toggle("visually-hidden");
  slidesControl[currentSlide].classList.toggle("active");
});

arrRight.addEventListener("click", function (evt) {
   evt.preventDefault();
   slides[currentSlide].classList.toggle("visually-hidden");
   slidesControl[currentSlide].classList.toggle("active");
   currentSlide = (currentSlide+1+slides.length)%slides.length;
   slides[currentSlide].classList.toggle("visually-hidden");
   slidesControl[currentSlide].classList.toggle("active");
});


// Радио баттоны для слайдера

var slider = document.querySelector('.slider');
var controlRadio = slider.querySelectorAll('.slider__radio');
var sliderItems = slider.querySelectorAll('.slider__item');
var index = 0;

slider.addEventListener('click', controlSliderRadio);

function controlSliderRadio (evt) {
  evt.preventDefault();
  if(!evt.target.classList.contains('active') && evt.target.classList.contains('slider__radio')) {
    for (var i=0; i < controlRadio.length; i++) {
      if(controlRadio[i].classList.contains('active')) {
        index = i;
      }
      controlRadio[i].classList.remove('active');
      sliderItems[i].classList.remove('visually-hidden');
    }
    evt.target.classList.add('active');
    sliderItems[index].classList.add('visually-hidden');
  }
}