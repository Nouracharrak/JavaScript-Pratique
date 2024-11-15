// ecrire dans le champs minimum 5 caractere. si on ecrit moins, on a le background de champs rouge avec un message. Quand on mis un nom correct en respectant les 5 caractere, on a un message ok en vert et le champs aussi devient vert et le button d'activation s'active aussi. 

// Selection
var monInput = document.querySelector('input');
var monParagraph = document.querySelector('p');
var monBouton = document.getElementsByClassName('submit')[0];
var numCaracter = 5;

// Événement
monInput.addEventListener('change', write);

// Fonction 
function write() {
    if (monInput.value.length >= numCaracter) { 
        monInput.style.backgroundColor = 'green';
        monParagraph.innerHTML = 'OK';
        monParagraph.style.color = 'green'; 
        monBouton.disabled = false;
    } else {
        monInput.style.backgroundColor = 'red';
        monParagraph.innerHTML = 'Il faut écrire au minimum 5 caractères';
        monParagraph.style.color = 'red';
        monBouton.disabled = true;
    }
}

                                          // Methode prof

// var mesInput = document.getElementsByTagName('input');
// var monParagraph = document.getElementsByTagName('p');

// mesInput[0].addEventListener('change', verif);
// function verif(){
//     if (mesInput[0].value.length < 5) {
//         mesInput[0].style.backgroundColor = 'red';
//         monParagraph.innerHTML = 'Il faut écrire au minimum 5 caractères';
//         monParagraph.style.color = 'red';
//         mesInput[1].disabled = true;
//     } else {
//         monInput[0].style.backgroundColor = 'green';
//         monParagraph.innerHTML = 'OK';
//         monParagraph.style.color = 'green'; 
//         mesInput[1].disabled = false;
//     }
// }