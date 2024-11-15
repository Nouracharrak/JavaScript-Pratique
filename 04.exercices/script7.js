
// Selection
var monImage = document.getElementsByTagName('img');
var myBoutons = document.getElementsByTagName('button');
var numImage = 1;
var totalImages = 6;

// Evenement

if (myBoutons[1]) {
    myBoutons[1].addEventListener('click', previous);
}

if (myBoutons[0]) {
    myBoutons[0].addEventListener('click', next);
}
// Fonctions
function next() {
    numImage += 1;
    if (numImage > totalImages) {
        numImage = 1;
    }
    monImage[0].src = 'img/' + numImage + '.jpg';
}

function previous() {
    numImage -= 1;
    if (numImage < 1) {
        numImage = totalImages;
    }
    monImage[0].src = 'img/' + numImage + '.jpg';
}