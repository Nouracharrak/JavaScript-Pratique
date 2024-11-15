console.log ('test')
                  // selection Naturelle
// je peux selectionner un elemenr grace à son id:
var selection1 = masection;
console.log (selection1);
// afficher le contenu d'un element:
console.log (selection1.innerHTML);
console.log (typeof(selection1));
                 // selection ById
// On peut selectionner un element grace à son id
var selection2 = document.getElementById ('masection')
console.log (selection2);
                 // selection BtTagName
// on peut selectionner un element grace au nom de sa balise
var selection3 = document.getElementsByTagName ('span');
console.log(selection3);
// Afficher le contenu de span
console.log(selection3[0].innerHTML)
//                   selection ByClassName
// on peut selectionner des éléments grace à leur class name
var selection4 = document.getElementsByClassName('avion');
console.log (selection4)
// afficher le contenu des 3 div class avion dans la console
for (let i = 0; i < selection4.length; i++) {
    console.log(selection4[i].innerHTML);
}

                    // selection QuerySelector
// on selectionne que le 1er element d'une liste:
var selection5 = document.querySelector('P');
console.log(selection5)
                    // selection QuerySelectorAll
// on selectionne tous les elements d'une liste:
var selection6 = document.querySelectorAll('P');
console.log(selection6)
// On affiche le contenu du 4ème paragraphe:
console.log(selection6[3].innerHTML);
// resumé:
/*id: Selection naturelle
getElementById: selection par l'id
getElementByTagName: selection par le nom de la balise
getElementByClassName: Selection par la class
querySelector : Selection du premier élément d'une liste
querySelectorAll : Selection par le nom de la balise, par la class ou par l'id */

