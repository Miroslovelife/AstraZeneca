var a = document.getElementById('burger_button');


a.onclick = function() {
    document.getElementById('menu__items').classList.remove('menu__items_after');
    document.getElementById('menu__items').classList.toggle('menu__items');
}

