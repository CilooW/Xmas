/**
 * Created by Ciloo on 04/12/2016.
 */
$(document).ready(
    function () {

var name = prompt('Quel est votre nom?');

function greetings () {
   var sentence = document.getElementById("sentence");

   return sentence.innerHTML = "Bonnes Fêtes " + name + " !";
}

greetings();

        $(function () {
            $(".tlt").textillate({loop:true});
        })

        $.fn.snow();

//$("#imgyeti").mouseover( function () {});

$("#imgyeti").mousedown( function () {

    var posLeft = Math.floor(Math.random() * 900) + 1  +"px";
    var posTop = Math.floor(Math.random() * 300) + 1  +"px";

    $("#yetialone").hide( 1 ).delay( 400 ).show( 1 );
    $(this).animate( {"margin-left" : posLeft, "margin-top" : posTop})
});

    });