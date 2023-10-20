var slideIndex = 1;
showSlides_second(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide_second(n) {
    showSlides_second(slideIndex = n);
}

function showSlides_second(n) {
    var i;
    var slides = document.getElementsByClassName("reason__slide");
    var rectangles = document.getElementsByClassName("reason__circle");
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
        rectangles[i].className = rectangles[i].className.replace("reason__active__circle", "");
    }

    slides[slideIndex - 1].style.display = "block";
    rectangles[slideIndex - 1].className += " reason__active__circle";
}

