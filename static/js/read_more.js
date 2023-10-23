var read = document.getElementById("read__more");
const pageWidth = document.documentElement.scrollWidth


read.onclick = function() {
    document.getElementById("inactive__text").classList.remove("read__more__active");
    document.getElementById("inactive__text").classList.toggle("read__more__inactive");
}

if (pageWidth >= 768) {
    document.getElementById("inactive__text").classList.remove("read__more__active");
    document.getElementById("inactive__text").classList.toggle("read__more__inactive");
}