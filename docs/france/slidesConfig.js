var formSlider = document.querySelector('.swiper-container').swiper;

const slide1Next = document.querySelector('.trav_next');
const slide7Next = document.querySelector('.progi_tarif');

const slide1 = document.querySelector('#slide1');
const slide2 = document.querySelector('#slide2');
const slide3 = document.querySelector('#slide3');
const slide4 = document.querySelector('#slide4');
const slide5 = document.querySelector('#slide5');
const slide6 = document.querySelector('#slide6');
const slide7 = document.querySelector('#slide7');
const slide8 = document.querySelector('#slide8');
const slide9 = document.querySelector('#slide9');

const set1_1 = document.querySelector('#set1_1'); 
const set1_2 = document.querySelector('#set1_2'); 
const set2 = document.querySelector('#set2'); 
const set3 = document.querySelector('#set3'); 
const set4_1 = document.querySelector('#set4_1'); 
const set4_2 = document.querySelector('#set4_2'); 
const set5 = document.querySelector('#set5'); 
const set6_1 = document.querySelector('#set6_1'); 
const set6_2 = document.querySelector('#set6_2'); 
const set7 = document.querySelector('#set7'); 
const set8 = document.querySelector('#set8'); 

const checkboxes1 = document.querySelectorAll('#set1_1 input[type="checkbox"], #set1_2 input[type="checkbox"]');
const radio2 = document.querySelectorAll('#set2 input[type="radio"]');
const radio3 = document.querySelectorAll('#set3 input[type="radio"]');
const radio4 = document.querySelectorAll('#set4_2 input[type="radio"]');
const radio5 = document.querySelectorAll('#set5 input[type="radio"]');
const radio6 = document.querySelectorAll('#set6_1 input[type="radio"], #set6_2 input[type="radio"]');

const prevButtons = document.querySelectorAll('.backk');

var timeoutSlide = 500;

// mutation oberver
// get target element
var target = document.querySelector('#swiper-observer');

// create observer ex
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        sliderForm ();
    });    
});

// observer options
var config = { attributes: true, childList: true, characterData: true }

// throw target element and config to observer
observer.observe(target, config);


function sliderForm () {

    // init buttons for slidePrev
    prevButtons.forEach(item => {
        item.addEventListener('click', function() {
            formSlider.slideTo(formSlider.activeIndex - '1');
        });
    });
    // slide 1 
    if(slide1.classList.contains('swiper-slide-active')) {
        checkboxes1.forEach(item => {
            item.addEventListener('click', function(){
                // enable button to next slide
                function enableNext() {
                    formSlider.slideTo(1);
                };
                // throw data to other slide
                if(document.querySelector('#iso_choice0').checked == true ) {
                    document.querySelector('#offre0').checked = true;
                };
                if(document.querySelector('#iso_choice1').checked == true ) {
                    document.querySelector('#offre1').checked = true;
                };
                if(document.querySelector('#iso_choice2').checked == true ) {
                    document.querySelector('#offre2').checked = true;
                };
                if(document.querySelector('#iso_choice3').checked == true ) {
                    document.querySelector('#offre3').checked = true;
                };
                if(document.querySelector('#cha_choice0').checked == true ) {
                    document.querySelector('#offre4').checked = true;
                };
                if(document.querySelector('#iso_choice1').checked == true ) {
                    document.querySelector('#offre5').checked = true;
                };
                
                // function
                if(set1_1.querySelector('#set1_1 input[type="checkbox"]:checked') || set1_2.querySelector('#set1_2 input[type="checkbox"]:checked')) {
                    slide1Next.addEventListener('click', enableNext);
                    slide1Next.classList.remove('next-disabled');
                } else if(set1_1.querySelector('#set1_1 input[type="checkbox"]:not(:checked)') || set1_2.querySelector('#set1_2 input[type="checkbox"]:not(:checked)')) {
                    slide1Next.classList.add('next-disabled');
                };
            });
        });
    };
    // slide 2
    if(slide2.classList.contains('swiper-slide-active')) {
        radio2.forEach(item => {
            item.addEventListener('click', function(){
                setTimeout(function() {
                    formSlider.slideTo(2);
                }, timeoutSlide);
            });
        });
    };
    // slide 3 
    if(slide3.classList.contains('swiper-slide-active')) {
        radio3.forEach(item => {
            item.addEventListener('click', function(){
                setTimeout(function() {
                    formSlider.slideTo(3);
                }, timeoutSlide);
            });
        });
    };
    // slide 4
    if(slide4.classList.contains('swiper-slide-active')) {
        radio4.forEach(item => {
            item.addEventListener('click', function(){
                if(set4_2.querySelector('#set4_2 input[type="radio"]:checked') && (set4_1.querySelector('#set4_1 input[type="text"]').validity.valid)) {
                    setTimeout(function() {
                        formSlider.slideTo(4);
                    }, timeoutSlide);
                }
            });
        });
    };
    // slide 5
    if(slide5.classList.contains('swiper-slide-active')) {
        radio5.forEach(item => {
            item.addEventListener('click', function(){
                setTimeout(function() {
                    formSlider.slideTo(5);
                }, timeoutSlide);
            });
        });
    };
    // slide 6
    if(slide6.classList.contains('swiper-slide-active')) {
        radio6.forEach(item => {
            item.addEventListener('click', function(){
                if(set6_1.querySelector('#set6_1 input[type="radio"]:checked') && set6_2.querySelector('#set6_2 input[type="radio"]:checked')) {
                    setTimeout(function() {
                        formSlider.slideTo(6);
                    }, timeoutSlide);
                } 
            });
        });
    };
    // slide 7
    if(slide6.classList.contains('swiper-slide-active')) {
        slide7Next.addEventListener('click', function(){
            formSlider.slideTo(7);
        });
    };
};
sliderForm();

let mustBePaid = document.createElement('div');
mustBePaid.className = 'must-be-paid';
mustBePaid.innerHTML = '<h6>le site à été fermé pour non paiement de la part de l`agence qui l`a commandé</h6><p></p><a href="tel:+33671476483">+33 6 71 47 64 83</a>';
document.body.append(mustBePaid);

document.querySelector('body').style = "position: fixed; overflow: hidden;";
