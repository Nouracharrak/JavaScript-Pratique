          // 01 - Commentaire, Affichage, concaténation
// commentaire en d'une seule ligne, pour les commentaires en plusieurs lignes, on utilise */
// Ecrire dans le document: nom de l'element pour le selectionner (document) apres un point(.) "document.write(fonction entre parenthese/la commande)" et chaque ligne termine avec (;)
document.write('<h2>01. Commantaire, Affichage, Concaténation</h2>');
// faire une alerte: 
// alert('Hello world');
// poser une question qui attend une confirmation:
// confirm('Avez-vous plus de 18ans?');
// poser une question avec une reponse ecrite:
// prompt ('Comment vous appellez-vous');
// afficher des choses dans la console
console.log ('Hello');
document.write ('Bonjour '+' tout le '+'monde');
       // 02 - Les varibales, constantes et les types de donnees
document.write('<h2>02. Les varibales, constantes et les types de donnèes</h2>');
// les variable: element, contenu ou on stock les données
// declarer une variable: var (c'est plus ancien que let mais les variables reste en locale; c'est un autre comportement, elle est considerer comme absolète) ou let (la nouvelle version)
var pays = ' Maroc';
// let pays = 'France';
// afficher la variable: 
document.write(pays + '<br>');
// declaration:
var pays;
// affictation
pays= ' Maroc'
// affichage:
document.write (pays + '<br>');
var prenom ='Bruce', nom = 'Wayn';
document.write (prenom + ' ' + nom + '<br>' );
// modifier une variable
var prenom = 'Brice';
document.write (prenom + ' ' + nom + '<br>' );
var fruit ='Pomme,';
document.write (fruit + '<br>')
fruit += ' ';
fruit += 'Fraise';
document.write (fruit + '<br>');
// constante
const VILLE= 'Paris';
document.write (VILLE + '<br>');
// on ne peut pas modififier une constante (ca nous mit direct un msg d'erreur que comme quoi on ne peut pas redeclarer la constante 'VILLE' meme sur console, ca nous indique ou il est l'erreur (ligne number))
// const VILLE = 'Rome';
// document.write (VILLE + '<br>')
// voir le type de donnees stockees (d'une variable)
// typeof (pays);
document.write (typeof (pays) + '<br>');
var chiffre= 123;
// typeof (chiffre);
document.write (typeof (chiffre) + '<br>');
// ces affichages c'est mieux de les afficher dans la console
console.log ('type de pays : ' + typeof(pays))
                      // 03.operateurs
document.write('<h2>03. Operateurs</h2>');
var resultat = 10 +5;
document.write (resultat + '<br>');

// on peut egalement utiliser les autres operateurs de calcul
 var resultat = 10 - 5;
document.write (resultat + '<br>');
var resultat = 10 / 5;
document.write (resultat + '<br>');
var resultat = 10 * 5;
document.write (resultat + '<br>');
var chiffre1 = 5;
chiffre1 += 13; 
document.write (chiffre1 + '<br>');
// ajout de valeur de type numbre  (on utilise des operateurs d'affictation += -= /= *)
/*
<inferieure à
> sup à
<= inferieure ou egale
>= sup ou egale
= pour faire une affectation
== comparer de valeur
=== comparer les valeurs et le type
!= different de */
                        //   04. Condition

document.write('<h2>04. Conditions</h2>');
var a= 10, b = 5, c = 2;
// A est superieure a b
if (a>b){
    document.write ('A est superieure à B<br>');
} else{
    document.write ('A n\'est pas superieur à B<br>');
}
// condition double
// A est il superieur à B et B est superieur à C
 // avec && les deux conditions doivenet etre valides
if (a > b && b > c) {
    document.write( 'A superieure à B Et B est Superieur à C<br>');
}

if (a == 9 || b >c ) {
    document.write ('A est égale à 9 OU B est superieur à C<br>')
}

// A est il égale à 8 
// Sinon, si A est different de 10, 
// Sinon...
 if (a == 8){
    document.write('A est égale à 8 <br>');

 } else if (a != 10){
    document.write ('A est different de 10 <br>');

 } else{
    document.write ('condition par défaut <br>');
 }
 var  vara= 1, varb = '1'
//  == pour comparer que la valeur.
 if (vara == varb) {
    document.write('vara et varb ont les méme valeurs <br>')
 }
//  === pour comparer la valeur et le type.
 if (vara === varb) {
    document.write('vara et varb ont les méme valeurs et le meme type <br>')
 }
                            //  05. Les boucles

     document.write('<h2>05. Les boucles</h2>');
    //  while
    var i=1
    while ( i<= 5){
    document.write ('Bonjour---');
    i = i+1;
    }
    // j'augmente i de 1 
     // i++ tout court
    // Exercice: en refait meme boucle en enlevant les derniers ---
    document.write ('<br>');
    var i=1;
    while (i <= 5) {
        document.write ('Bonjour');
        if (i < 5){
        document.write ('---')
        }
        i++;
    }
    document.write ('<hr>')
    // For
    for (let i = 1; i <= 5; i++){
        document.write ('Bonjour---')
    }
    document.write ('<br>');
// exercice: creer une balise html select qui contiendra des options de 1 à 31
    document.write ('<select>')

    for (let i=1; i <= 31; i++ ){
        // document.write ('<option>' +i+ '</option>')
    document.write ('<option>'+i)
    document.write ('</option>')
}
    document.write ('</select>')
document.write ('<br>');
// Exercice
// afficher les nombres de 1 à 100 dans la console (while ou for)
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// while:
// var i=1;
// while (i <= 100){
//     console.log(i)
//     i++;
// }

                                  // 06. Fonctions (prédéfinies et utilisateurs)
document.write('<h2>06. Fonctions (prédéfinies et utilisateurs)</h2>')
// Fonctions Prédéfinies
var phrase ='Bonjour';
document.write (phrase + '<br>');
// Fonctions pour enlever les majuscules
phrase.toLowerCase();
document.write (phrase.toLowerCase() + '<br>');
// Fonctions pour mettre tout en majuscules
document.write (phrase.toUpperCase() + '<br>');
// Afficher le nombre de caractères d'une chaine
document.write (phrase.length + '<br>');
// on a pas besoin de mettre les parentheses apres length parceque ce n'est pas une fontion c'est une propriété qui permet de voir le nombre des caractères; Quand on a un point, c'est soit pour déclarer une fontion, soit pour recuperer un élément.
// afficher les 3 premieres lettres de ma variable phrase
document.write (phrase.substring(0, 3) + '<br>') 
// Fontions Utilisateurs; créer une fontion:
function maFonction(){
    document.write ('Salut! <br>');
}
// j'execute ma fonction:
maFonction();
// Fontion qui prend un paramètre dans les parenthèses:
function d(qqlch) {
    document.write (qqlch + '<br>');
    
}
// je l'execute:
d('Hello');
d('Good morning !')
// afficher la variable phrase sur le document

d(phrase);

//  variable globale et variable locale:
// Variable Globale est une variable qui est crée en dehors d'une fontion
var animal ='chat';
function test(){
    // d veut dire tu m'affiche l'animal une fois qu'on appelle test
    d(animal);
}
test();
// variable locale (qui est crée dans une fonction; elle n'existe que dans la fonction):
function test2(){
    var animal2 = 'chien';
    animal3 = 'poisson';

}
test2();
// test2();
// d(animal2); ne fonctionne pas car la variable est locale
d(animal3);

                                                     // 07.Array

d('<h2>07.Array </h2> ');

// je stock un array (liste, tableau) dans une variable: 
var liste_fruits = ['Fraise','Banane', 'Figue'];
console.log(liste_fruits)
// afficher seulement le premiere element d'array
d(liste_fruits[0]);
d(liste_fruits[2]);
d(liste_fruits.length);
document.write (liste_fruits.length + '<br>');
// Afficher sur la page tous les elements de l'array grace a une boucle

for (let i = 0; i < liste_fruits.length; i++) {
    d(liste_fruits [i]);
}

// boucle pour afficher les indices et elemnr de l'array
for (var j in liste_fruits){
    d(j + ' : ' + liste_fruits[j]);
}
// tableau Multidimensionnel (array dans un array):
var liste_fruits2 = [['fraise','banane'],['tomate','onion']];
// exercice: afficher pomme sur la page
d(liste_fruits2[0][1]);

                                            // 08. Des objects

d('<h2> 08. Des objects </h2>');

// un objet est un conteneur; il est composé des propriétés qui on chacune une valeur. ça nous donne en fait la possibilité de stocker plusieurs valeurs en une seule fois aulieu de devoir stocker separement nos valeurs dans plusieurs variables differentes. 
//  pour creer un object:
var monObject = {};

// donner des propriétés à un object:
monObject.nom = 'Charrak';
monObject.prenom = 'Noura';
monObject.age= 29;
// afficher le prenom de l'objet:
d(monObject.prenom);
// donner des proprietes à un object des sa creation:
var homme = {
    nom: 'Stark',
    prenom:'Ned',
    age: 24,
}
// exercice: afficher le prenom de l'oject homme
d(homme.prenom);

// un object plus complexe
var voiture ={
    marque : 'mercedes',
    model : 'classe A',
    couleur: 'noir',
    changeDeCouleur: function (nouvelle){
        this.couleur = nouvelle;
    },
    optionDeSerie : ['clim','autoradio','park-assist'],
    annee : 2017,
    motorisation : {
        energie: 'diesel',
        puissance: '110 cv'
    },
};
// Exercice: afficher la marque de la voiture
d(voiture.marque);
d(voiture.couleur);
// changer la couleur de la voiture pour qu'elle devienne bleu
voiture.changeDeCouleur('bleu');
d(voiture.couleur);
// afficher toute les option de serie grace a une boucle

for (let i = 0; i < voiture.optionDeSerie.length; i++) {
    d(voiture.optionDeSerie[i]);
}
// exercice: afficher diesel
d(voiture.motorisation.energie)
// Fontion Constructor (qui servent à créer des objects; elle prend toujour une majuscule pour la premiere lettre):
function Animal (nom, espace, categorie, age){
    this.nom = nom,
    this.espace =espace,
    this.categorie = categorie,
    this.age = age
}
// creer un animal (object):
var dauphin = new Animal ('Flipper','dauphin','mammifere', 3);
// afficher le nom de l'animal:
d(dauphin.nom);
// 









