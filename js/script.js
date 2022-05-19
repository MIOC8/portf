const container = document.querySelector('.container');
window.addEventListener('scroll', function (e) {
    if (scrollY >= 40) {
        container.classList.add('container__active')
    }
    else {
        container.classList.remove('container__active')
    }
})
const btn = document.querySelector('.Sign-hedear__block')
if (window.matchMedia("(max-width: 565px)").matches) {
    btn.innerHTML = 'menu';
}
const burg = document.querySelector('.block-bureger__menu');
btn.addEventListener('click', function (params) {
    burg.classList.toggle('block-bureger__menu-active')
})
