var slideIndex = 1;
showSlides_juri(slideIndex);



function currentSlide_juri(n) {
    showSlides_juri(slideIndex = n);
}

function showSlides_juri(n) {
    var i;
    var slides = document.getElementsByClassName("juri__slide");
    var rectangles = document.getElementsByClassName("juri__circle");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < rectangles.length; i++) {
        rectangles[i].className = rectangles[i].className.replace("active__circle_juri", "");
    }

    slides[slideIndex - 1].style.display = "block";
    rectangles[slideIndex - 1].className += " active__circle_juri";
}

