document.addEventListener('DOMContentLoaded', () => {

//btn hamburger
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');

    navlist.onclick = () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    }
}

//Animation
AOS.init(
    {offset:1,}
);


//Carousel
const swiper = new Swiper('.swiper-container', {
    loop: true, // Loop infinito
    autoplay: {
        delay: 5000, // Autoplay a cada 5 segundos
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Permite clicar nos indicadores
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


});
