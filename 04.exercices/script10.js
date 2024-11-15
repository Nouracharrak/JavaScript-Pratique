// Selection
var inputField = document.querySelector('textarea');
var textField = document.querySelector('p');
// Evenement
inputField.addEventListener('input', auto);
// Fonction
function auto() {
    textField.textContent = inputField.value;
}
