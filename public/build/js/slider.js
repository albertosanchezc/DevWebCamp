import Swiper from"swiper";import{Navigation,Pagination,Scrollbar}from"swiper/modules";import"swiper/css";import"swiper/css/navigation";document.addEventListener("DOMContentLoaded",(function(){if(document.querySelector(".slider")){new Swiper(".slider",{slidesPerView:1,spaceBetween:15,freeMode:!0,modules:[Navigation,Pagination,Scrollbar],speed:50,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2},1024:{slidesPerView:3},1200:{slidesPerView:4}}})}}));