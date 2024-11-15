console.log('test');
                                                  // Click
// Quand je click sur la div bleu, je fais apparaitre une alert pour dire un message:
// selectionner ma div :
var selection1 = document.getElementsByClassName('bleu');
// je détecte quand il y a un clique sur la div
selection1[0].addEventListener('click', fonction1);
// je cree une fonction (fonction1)
function fonction1(){
    alert('Vous avez Cliqué sur la bleu');
}
                                      // dblclick
var selection2 = document.getElementsByClassName('rose');
selection2[0].addEventListener('dblclick', fonction2);
function fonction2(){
alert('Vous avez dblclick ');
}

                               // mouseover

var selection3 = document.getElementsByClassName('rouge');
// je détecte quand il y a un clique sur la div
selection3[0].addEventListener('mouseover', fonction3);
// je cree une fonction (fonction1)
function fonction3(){
alert('Vous avez fait un mouseover ');
}
                              // mouseout

var selection4 = document.getElementsByClassName('orange');
// je détecte quand il y a un clique sur la div
selection4[0].addEventListener('mouseout', fonction4);
// je cree une fonction (fonction1)
function fonction4(){
alert('Vous avez fait un mouseout ');
}
                              //  blur
// selection5[0].addEventListener('blur', fonction5);
// // je cree une fonction (fonction1)
// function fonction5(){
// alert('Vous avez fait un blur');
// }
                              //  blur method prof
var selection5 = document.getElementsByTagName('input');
// je détecte quand il y a un clique sur la div
selection5[0].addEventListener('blur', fonction5);
// je cree une fonction (fonction1)
function fonction5(){
alert('Vous avez fait un blur');
}
                             // focus
// var selection6 = document.getElementById('focus');
// // je détecte quand il y a un clique sur la div
// selection6.addEventListener('focus', fonction6);
// // je cree une fonction (fonction1)
// function fonction6(){
// alert('Vous avez fait un focus');

// }
                        // focus method prof
selection5[1].addEventListener('focus', fonction6);
// je cree une fonction (fonction1)
function fonction6(){
alert('Vous avez fait un focus');
}
// https://developer.mozilla.org/fr/docs/Web/Events: la doc pour integrer les evenements.



