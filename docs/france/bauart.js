let navList = document.querySelector('.form-nav__list');
let navLinks = document.querySelectorAll('.form-nav__link');
let formSlides = document.querySelectorAll('.form-steps .swiper-wrapper .swiper-slide'); 
let stepsCounter = document.querySelector('.steps-counter');
let discountCounter = document.querySelector('.discount-counter');
let fieldset1 = document.querySelector('.fieldset-1');
let fieldset2 = document.querySelector('.fieldset-2');
let fieldset3 = document.querySelector('.fieldset-3');
let fieldset4 = document.querySelector('.fieldset-4');
let fieldset5 = document.querySelector('.fieldset-5');
let fieldset6 = document.querySelector('.fieldset-6');
let fieldset7 = document.querySelector('.fieldset-7');
var lengthIndicator = document.querySelector('#range-output-1');
var widthIndicator = document.querySelector('#range-output-2');
var floorsIndicator = document.querySelector('#range-output-3');
var rangeLength = document.querySelector('#length');
var rangeWidth = document.querySelector('#width');
var rangeFloors = document.querySelector('#floors');
var checkboxSum = 0;

var formSlider = new Swiper('.form-steps', {
    spaceBetween: 100,
    allowTouchMove: false,
    autoPlay: false,
    navigation: {
        prevEl: '.prev-slide-button',
        nextEl: '.next-slide-button',
    }
});
lengthIndicator.textContent = rangeLength.value;
widthIndicator.textContent = rangeWidth.value;
floorsIndicator.textContent = rangeFloors.value;
discountCounter.textContent = 1;
navLinks[0].classList.add('form-link-active');
navLinks.forEach((link, i) => link.dataset.slide = i);

lengthIndicator.style.left = 'clamp(2%,' + rangeLength.value / rangeLength.max * 100 + '%'+', 96%)';
widthIndicator.style.left = 'clamp(2%,' + rangeWidth.value / rangeWidth.max * 100 + '%'+', 96%)';
floorsIndicator.style.left = 'clamp(2%,' + rangeFloors.value / rangeFloors.max * 100 + '%'+', 96%)';

navList.addEventListener('click', function(event) {
    if (event.target.classList.contains('form-nav__link')) {
        formSlider.slideTo(event.target.dataset.slide);
    }
});

formSlider.on('slideChange', function (){
    navLinks.forEach((element) => {
        element.classList.remove('form-link-active');
        navLinks[formSlider.activeIndex].classList.add('form-link-active');
        stepsCounter.textContent = formSlider.activeIndex + 1;
    });
    if (formSlider.activeIndex == 0) {
        discountCounter.textContent = 1;
    } else if (formSlider.activeIndex == 1) {
        discountCounter.textContent = 1.5;
    } else if (formSlider.activeIndex == 2) {
        discountCounter.textContent = 2;
    } else if (formSlider.activeIndex == 3) {
        discountCounter.textContent = 2.5;
    } else if (formSlider.activeIndex == 4) {
        discountCounter.textContent = 3; 
    } else if (formSlider.activeIndex == 5) {
        discountCounter.textContent = 4;
    } else if (formSlider.activeIndex == 6) {
        discountCounter.textContent = 5;
    } 
});

rangeLength.addEventListener('input', function () {
    lengthIndicator.textContent = rangeLength.value;
    lengthIndicator.style.left = 'clamp(2%,' + rangeLength.value / rangeLength.max * 100 + '%'+', 96%)';
});
rangeWidth.addEventListener('input', function () {
    widthIndicator.textContent = rangeWidth.value;
    widthIndicator.style.left = 'clamp(2%,' + rangeWidth.value / rangeWidth.max * 100 + '%'+', 96%)';
});
rangeFloors.addEventListener('input', function () {
    floorsIndicator.textContent = rangeFloors.value;
    floorsIndicator.style.left = 'clamp(2%,' + rangeFloors.value / rangeFloors.max * 100 + '%'+', 96%)';
});