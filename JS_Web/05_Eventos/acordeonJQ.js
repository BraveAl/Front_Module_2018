/* $('.main').on("click", "h2", function () {
    if ($(this).attr('class') != "iconoClose") {
        // si no tiene el icono de cerrar: esta cerrado y hay que abrirlo
        $(this).trigger("desplegar")
    }
    else { // si esta abierto, se deja como está
        return;
    }		                
}); // fin de la funcion click() */
/* $('.main').on("desplegar", "h2", function () {
    $(".main div").fadeOut();
    $('.main h2').removeClass('iconoClose')
    $(this).next('.answer').slideDown();
    $(this).addClass('iconoClose');
}) // fin de la función desplegar */

function main() {
let aRespuestas = document.querySelectorAll('main.answer')
let aPreguntas = document.querySelectorAll('main h2')
document.querySelector('.main h2:first-of-type')
.classList.add('close')
// background-image: url(images/close.png);

aPreguntas.forEach(item => {
    item.addEventListener('click', elegirPregunta, false)
});

aRespuestas.forEach(item => {
    //item.addEventListener()
});

function elegirPregunta(ev)
{
    if(ev.target.classList.contains('close'))
    { // si esta abierto, se deja como está
        return;
    } else {
        // si no tiene el icono de cerrar: esta cerrado y hay que abrirlo
        //$(this).trigger("desplegar")
        ev.target.dispatchEvent(new Event('desplegar')) // Creo un evento que seria desplegar

    }
     
}

}

window.addEventListener('load', main)