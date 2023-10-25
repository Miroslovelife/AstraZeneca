var swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    pagination: {
        el: ".pagination__custom",
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        }
    }
}
);

