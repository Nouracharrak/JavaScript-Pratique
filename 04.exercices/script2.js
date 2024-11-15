// Quand je survole la div elle devient rouge et quand je quitte le suvole de la div elle devient Jaune
// mouseover
var element = document.getElementsByTagName('div');

element[0].addEventListener('mouseover', red);
function red(){
    element[0].style.backgroundColor = ('red');
    console.log(element)
}

element[0].addEventListener('mouseout', yellow);
function yellow(){
    element[0].style.backgroundColor = ('yellow');
    console.log(element)
}
