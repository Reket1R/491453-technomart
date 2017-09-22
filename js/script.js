
var link = document.querySelector(".btn__write-us");
if (link) {
  var popup = document.querySelector(".modal--write-us");
  var close = popup.querySelector(".modal-close");
  var form = popup.querySelector("form");
  var person = popup.querySelector("[name=person]");
  var email = popup.querySelector("[name=email]");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
    person.focus();
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--show");
    popup.classList.remove("modal--error");
  });

  form.addEventListener("submit", function (evt) {
    if (!person.value || !email.value) {
      evt.preventDefault();
      popup.classList.add("modal--error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal--error");
      console.log("Нужно ввести ФИО и 'E-Mail'");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal--show")) {
        popup.classList.remove("modal--show");
        popup.classList.remove("modal--error");
      }
    }
  });
}


var mapLink = document.querySelector(".open-map");
if (mapLink) {
  var popupMap = document.querySelector(".modal--map");
  var closeMap = popupMap.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal--show");
  });

  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupMap.classList.contains("modal--show")) {
        popupMap.classList.remove("modal--show");
      }
    }
  });
}

var buyLink = document.querySelector(".btn--buy");
if (buyLink) {
  var allProductsList = document.querySelector(".products__list");
  var popupBuy = document.querySelector(".modal--cart");
  var closeBuy = popupBuy.querySelector(".modal-close");

  allProductsList.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("btn--buy")) {
      evt.preventDefault();
      popupBuy.classList.add("modal--show");
    }
  })

  closeBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBuy.classList.remove("modal--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupBuy.classList.contains("modal--show")) {
        popupBuy.classList.remove("modal--show");
      }
    }
  });
}

var slides = document.querySelectorAll(".slider-item");
var slidesControl = document.querySelectorAll(".slider-control-radio i");
var arrLeft = document.querySelector(".slider-control-left");
var arrRight = document.querySelector(".slider-control-right");
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

var slider = document.querySelector(".slider");
var controlRadio = slider.querySelectorAll(".slider-radio");
var sliderItems = slider.querySelectorAll(".slider-item");
var index = 0;

slider.addEventListener('click', controlSliderRadio);

function controlSliderRadio (evt) {
 evt.preventDefault();
 if(!evt.target.classList.contains("active") && evt.target.classList.contains('slider__radio')) {
 for (var i=0; i < controlRadio.length; i++) {
 if(controlRadio[i].classList.contains("active")) {
 index = i;
 }
 controlRadio[i].classList.remove("active");
 sliderItems[i].classList.remove("visually-hidden");
 }
 evt.target.classList.add("active");
 sliderItems[index].classList.add("visually-hidden");
  }
}