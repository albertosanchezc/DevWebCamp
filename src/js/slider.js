import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.slider')) {
        const opciones = {
            // Default parameters
            slidesPerView: 1,
            spaceBetween: 15,
            freeMode: true,
            modules: [Navigation, Pagination, Scrollbar],
            speed: 50,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
                     // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                768: {
                    slidesPerView: 2
                },
                // when window width is >= 480px
                1024: {
                    slidesPerView: 3
                },
                // when window width is >= 640px
                1200: {
                    slidesPerView: 4
                }
            }
        }

        new Swiper('.slider', opciones);

    }

});

