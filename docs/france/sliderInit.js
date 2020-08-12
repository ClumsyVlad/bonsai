var swiper = new Swiper('.swiper-container', {
    spaceBetween: 100,
    width: 310,
    allowTouchMove: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    renderProgressbar: function (progressbarFillClass) {
        return '<div class="' + progressbarFillClass + '"><p>'+ progressBar.clientWidth / 100 + '%' +'</p></div>';
    }
});
const progressFill = document.querySelector('.swiper-pagination-progressbar-fill');
const progressBar = document.querySelector('.swiper-pagination-progressbar');
progressFill.addEventListener('click', function () {
    this.innerText = progressBar.clientWidth / 100 + '%';
})
// document.querySelector('body').style = "opacity: 0.5;";
