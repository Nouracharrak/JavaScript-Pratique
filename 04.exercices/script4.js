
                                       // ma methode

var buttonChange = document.getElementsByTagName('input')[0];
var colorChange = document.getElementsByTagName('div');
var numColor = 0;

buttonChange.addEventListener('change', color);

        function color() {
            colorChange [numColor].style.backgroundColor = buttonChange.value;
            numColor++;

            if (numColor >= colorChange.length) {
                numColor = 0;
            }
        }
                                          
                                          // method Mathias
// var input = document.getElementsByTagName('input');
// var div = document.getElementsByTagName('div');

// input[0].addEventListener('change', color)

// numColor = 0
// function color(){

// div[numColor].style.backgroundColor = input[0].
// numColor ++
// if (numColor == 5){
//     numColor = 0
// }
// }

                                              // method Prof

//   Selection                                         

// var  monInput = document.getElementsByTagName('input')
// var mesDiv = document.getElementsByTagName('div')
// var numeroDiv = 0;

// // Evenement

// monInput[0].addEventListener('change', changeColor)
// // on peut utiliser blur comme event
// // Fonction

// function changeColor(){
//     // changement de couleur
//     mesDiv[numeroDiv].style.backgroundColor = monInput[0].value;
//     // j'augmente de 1 mon div 
//     numeroDiv += 1;
//     // si j'arrive sur la derniere div qui n'existe pas, je reviens sur la 1ere
//     if (numeroDiv >= mesDiv.length) {
//         numeroDiv = 0;
//     }

// }

