// selection
var monImage = document.getElementsByTagName('img');
console.log(monImage)
var numImage = 1;
// Evenement
var timer= setInterval(changeImage, 2000);
// Fonction
function changeImage() {
    numImage += 1;
    monImage[0].src = 'img/' + numImage + '.jpg';
    if (numImage === 6){
        numImage = 0;
        // clearInterval(timer);
    }
}