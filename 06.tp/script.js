
// selection
var myButtons = document.getElementsByTagName('button');
var maDiv = document.getElementsByTagName('div')
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var operationSelect = document.getElementById('operationSelect');

// Événements
myButtons[0].addEventListener('click', show);
myButtons[1].addEventListener('click', hide);
myButtons[2].addEventListener('click', result);

// Fonctions
function show() {
    maDiv[0].style.display = 'block'
}

function hide() {
    maDiv[0].style.display = 'none'
}

function result() {
    var input1Value = parseFloat(input1.value) || 0;
    var input2Value = parseFloat(input2.value) || 0;
    var operation = operationSelect.value;

    let resultat;
    let operationString = input1Value + ' ' + operation + ' ' + input2Value + ' = ';

    // Perform the calculation based on the selected operation
    if (operation) {
        if (operation === '+') {
            resultat = input1Value + input2Value;
        } else if (operation === '-') {
            resultat = input1Value - input2Value;
        } else if (operation === '*') {
            resultat = input1Value * input2Value;
        } else if (operation === '/') {
            resultat = input2Value !== 0 ? input1Value / input2Value : 'Erreur: division par zéro';
        }
    } else {
        resultat = 'Veuillez sélectionner une opération.';
    }
    alert('résultat: ' + operationString + resultat);
}

//                                    // Method prof

//                                  // Selection 
// var monLien = document.getElementsByTagName('a');
// console.log(monLien);
// var calculatrice = document.getElementsByTagName('section');
// console.log(calculatrice);
// var champs = document.getElementsByTagName('input')
// console.log(champs);
// var operateur = document.getElementsByTagName('select')
// console.log(operateur);
// var go = document.getElementsByTagName('span')
// console.log('go')

//                                 // Evenement 
// monLien[0].addEventListener('click', apparition);
//                                // Fonction
// function apparition(){
//     console.log('apparition!')
//     calculatrice[0].style.visibiliy = 'visible';
// }
//                                 // Evenement2
// monLien[1].addEventListener('click', disparition);
//                                 // Fonction2
//  function disparition(){
//      console.log('dispparition!')
//      calculatrice[0].style.visibiliy = 'hidden';
//  }
//                                // Evenement3
// go[0].addEventListener('click', calcul)
//                                // Fonction2
// function calcul(){
// console.log('calcul!')
// var premier = parseInt (champs[0].value);
// var deuxieme = parseInt (champs[1].value);
// if (operateur[0].value === '+'){
//     var resultat = premier + deuxieme;
// }else if (operateur[0].value === '-'){
//     var resultat = premier - deuxieme;
// }else if (operateur[0].value === '*'){
//     var resultat = premier * deuxieme;
// }else if (operateur[0].value === '/'){
//     var resultat = premier / deuxieme;
// }

// alert (premier + operateur[0].value + deuxieme + '=' + resultat)

// }
