let jetSwiper = new Swiper('.jet-taxi-block-swiper-container', {
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 0
});
const jetBlock = document.querySelector('.jet-taxi-circle-block');
const jetBlockStyle = getComputedStyle(jetBlock);
const jetBlockPt = parseInt(jetBlockStyle.paddingTop);
const jetBlockPb = parseInt(jetBlockStyle.paddingBottom);
    jetBlock.style.height = jetBlock.clientWidth - jetBlockPt - jetBlockPb + 'px';
    console.log(jetBlock.style.height);
const jetStep_1 = document.querySelector('.jet-taxi-circle-icon-1');
const jetStep_2 = document.querySelector('.jet-taxi-circle-icon-2');
const jetStep_3 = document.querySelector('.jet-taxi-circle-icon-3');
const jetStep_4 = document.querySelector('.jet-taxi-circle-icon-4');
jetStep_1.addEventListener("mouseover", function(e) {
    jetSwiper.slideTo(0);
});
jetStep_2.addEventListener("mouseover", function(e) {
    jetSwiper.slideTo(1);
});
jetStep_3.addEventListener("mouseover", function(e) {
    jetSwiper.slideTo(2);
});
jetStep_4.addEventListener("mouseover", function(e) {
    jetSwiper.slideTo(3);
});