// Quand on clique dans la div les paragraphes changent de style:
// -bordure rouge de 5px
// -couleur de fond orange
// -marge intérieur de 15px
// -couleur de texte blanche
// -taille de caractère de 25px
// -Et le titre (h1) disparait.
                                    // methode 1
// function changeStyle() {
//     // Faire disparaître le titre (h2)
//     var subtitle = document.getElementById('subtitle');
//     subtitle.style.display = 'none';
//     var paragraphs = document.querySelectorAll('p');
//         paragraphs.forEach(paragraph => {
//         paragraph.style.border = '5px solid red'; 
//         paragraph.style.backgroundColor = 'orange'; 
//         paragraph.style.padding = '15px'; 
//         paragraph.style.color = 'white'; 
//         paragraph.style.fontSize = '25px';
//     });
// }
                                     // methode 2
var changeStyleDiv = document.getElementsByTagName('div')
var changeStyleH2 = document.getElementsByTagName('h2')
var changeStyleP = document.getElementsByTagName('p')

changeStyleDiv[0].addEventListener ('click' , changement)
function changement(){
        for (i = 0; i < changeStyleP.length; i++) {
            changeStyleP[i].style.border = '5px solid red';
            changeStyleP[i].style.backgroundColor = 'orange';
            changeStyleP[i].style.padding = '15px';
            changeStyleP[i].style.color = 'white';
            changeStyleP[i].style.fontSize = '25px';
        }
        changeStyleH2[0].style.display = 'none' // Cacher le h1
    }
