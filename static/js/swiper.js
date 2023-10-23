var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    pagination: {
        el: ".pagination__custom",
        clickable: true
    },
    breekpoints: {
        768: {
            slidesPerView: 2,
        }
    }
}
);