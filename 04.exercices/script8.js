                                       // Method 1
// // var boutonBonjour = document.getElementsByTagName('button');

// // // Événement

// // boutonBonjour[0].addEventListener('click', answer); 

// // // la fonction lors du chargement de la page

// // window.onload = answer;

// // // Fonction pour demander le nom
// // function answer() {
// //     var nom = prompt('Comment vous appelez-vous?');
// //     if (nom) {
// //         boutonBonjour[0].textContent = 'Bonjour, ' + nom + '!';
// //     }
// // }

                                        // Method 2

// // Selection 
// var boutonBonjour = document.querySelector('button');

// // Événements
// boutonBonjour.addEventListener('click', answer);
// window.onload = answer;

// // Fonction pour demander le nom
// function answer() {
//     var nom = prompt('Comment vous appelez-vous?');
//     if (nom) {
//         boutonBonjour.textContent = 'Bonjour, ' + nom + '!';
//     }
// }

                                             // Method 3


// document.querySelector('button').addEventListener('click', answer);
// window.onload = answer;

// function answer() {
//     var nom = prompt('Comment vous appelez-vous?');
//     if (nom) this.textContent = 'Bonjour, ' + nom + '!';
// }

                                              // Method Prof
                                        
// Quand je lance la page, on me demande mon prenom 
// Quand je click sur le boutton, on m'affiche dans une popup 'bonjour + le prenom'


var nom = prompt('Comment vous appelez-vous?');

// selection 

var monBouton = document.getElementsByTagName('button')
console.log(monBouton)
// Evenement 
monBouton[0].addEventListener('click', bonjour)
// Fontion
function bonjour() {
// je verifie
console.log('click!');
// afficher une popup avec le nom de l'utilisateur dedans
    alert('Bonjour, ' + nom + '!')
}

