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

$("#imgyeti").mouseover( function () {

    var posLeft = Math.floor(Math.random() * 500) + 1  +"px";
    var posTop = Math.floor(Math.random() * 500) + 1  +"px";
    $(this).animate( {"margin-left" : posLeft, "margin-top" : posTop}, "fast")

});

$("#imgyeti").mousedown( function () {
    $("#yetialone").hide( 1 ).delay( 250 ).show( 1 );
});

    });