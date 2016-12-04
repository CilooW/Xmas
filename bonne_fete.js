/**
 * Created by Ciloo on 04/12/2016.
 */

var name = prompt('Quel est votre nom?');

function greetings () {
   var sentence = document.getElementById("sentence");


    return sentence.innerHTML = "Bonnes Fêtes " + name + " !";
}

greetings();

function changeYeti() {
    var yeti = document.getElementById("imgyeti");
    $(yeti).on(click, yeti, function ()
     {
         //change css property position to random position

    })
}