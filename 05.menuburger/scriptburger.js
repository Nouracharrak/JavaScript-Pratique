/* selection*/
var burger = document.getElementsByClassName('mobile');
console.log(burger);
var nav = document.getElementsByTagName('nav');
console.log(nav);
// Événement pour le clic sur le burger
burger[0].addEventListener('click', shownav);

// Fonction
function shownav() {

    if (nav[0].style.display == 'block'){
        nav[0].style.display = 'none';
        burger[0].src = 'img/burger.png';

    } else{
    nav[0].style.display = 'block';
    burger[0].src = 'img/close.png';
}
}
