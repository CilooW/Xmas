/**
 * Created by Ciloo on 04/12/2016.
 */
$(document).ready(
    function () {
//var name = prompt('Quel est votre nom?');

function greetings () {
   var sentence = document.getElementById("sentence");

   return sentence.innerHTML = "Bonnes Fêtes " + name + " !";
}

greetings();

$("#imgyeti").mouseenter( function () {

    var posLeft = Math.floor(Math.random() * 500) + 1  +"px";
    var posTop = Math.floor(Math.random() * 500) + 1  +"px";
    console.log(posLeft);
    console.log(posTop);
    $(this).animate( {"margin-left" : posLeft, "margin-top" : posTop}, "slow")

});

    });