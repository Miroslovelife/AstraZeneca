var a = document.getElementById('burger_button');
var b = document.getElementById('burger_button__right');

a.onclick = function() {
    document.getElementById('navbar__wrap').classList.toggle('navbar__wrap__after');
    document.getElementById('girl').style.display = "none";
    document.getElementById('navbar__wrap').classList.toggle('navbar__wrap');
}

b.onclick = function() {
    document.getElementById('navbar__wrap').classList.toggle('navbar__wrap');
    document.getElementById('navbar__wrap').classList.remove('navbar__wrap__after');
    document.getElementById('girl').style.display = "block";
}

