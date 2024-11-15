// au survol on a le div qui s'affiche avec la description de lien

// Selection
var monLien = document.querySelector('a');
var monDiv = document.querySelector('div');
monDiv.innerHTML = 'Description du lien'

// Événements
monLien.addEventListener('mouseover', affichageDiv);
monLien.addEventListener('mouseout', masquerDiv);

// Fonction pour afficher la div
function affichageDiv() {
    monDiv.style.display = 'block';
}

// Fonction pour masquer la div
function masquerDiv() {
    monDiv.style.display = 'none';
}

                  // method Prof
//                   // Selection
// var monLien = document.getElementsByTagName('a');
// var monDiv = document.getElementsByTagName('div');
                 // // Événements
// monLien [0].addEventListener('mouseover', affichageDiv);
// monLien [0].addEventListener('mouseout', masquerDiv);

         // Fonction pour afficher la div
// function affichageDiv() {
//     monDiv[0].innerHTML = 'Description du lien'
// }

// // Fonction pour masquer la div
// function masquerDiv() {
//     monDiv[0].innerHTML = '';
// }