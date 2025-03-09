var swiper = new Swiper(".blog-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:1,
        },
    },
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".carrossel-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 'none', 
        disableOnInteraction: false,
    },
    speed: 7000,
    slidesPerView: 8,
    centeredSlides: true,
    
});
var swiper = new Swiper(".carrossel2-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 'none', 
        disableOnInteraction: false,
    },
    speed: 7000,
    slidesPerView: 4,
    centeredSlides: true,
    
});
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.querySelector('.nav');
    const atendimento = document.querySelector('.atendimento');

    menuBtn.onclick = () => {
        nav.classList.toggle('active');
        atendimento.classList.toggle('active');
    };

    window.onscroll = () => {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
        if (atendimento.classList.contains('active')) {
            atendimento.classList.remove('active');
        }
    };
});