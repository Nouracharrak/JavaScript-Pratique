// quand je clique sur le bouton, je passe de l'image a à b
// selection (selectionner les elements nécessaire à la foncionnalité):

var monBouton = document.getElementsByTagName ('button');
console.log(monBouton);
var monImage = document.getElementsByTagName ('img');
console.log(monImage);
var numeroImage = 'a';
// Evenement (on detecte l'evenement qui declanchera la fonctionne):
monBouton[0].addEventListener('click', changeImage);
// Fonction (je developpe la fontion):
function changeImage() {
console.log ('click!');
// tu changes l'image a à b
if (numeroImage == 'a') {
    numeroImage = 'b';
    monImage[0].src = 'img/' + numeroImage + '.jpg';
} else {
    numeroImage = 'a';
    monImage[0].src = 'img/' + numeroImage + '.jpg';
}
}