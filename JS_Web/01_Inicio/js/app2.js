// Como no molan las variables globales, creamos un closure que englobe todo
(function () {
    // Hacemos la funcion main para poder poner el script en el head del html
    function main () 
    {
            // Definicion de variables antes de las funciones
        let oDom = {
            // Declaramos los botones
            eBotonSaludar : document.querySelector('#btnSaludar'),
            eBotonBorrar : document.querySelector('#btnBorrar'),
            // Para recoger el valor
            eInputName : document.querySelector('#inpName'),
            // Para mostrar algo en el html
            eOutSaludo : document.querySelector('#outSaludo')
        }

        /**
         * 
         * Manejador del evento click del boton 
         */
        function saludar()
        {
            // Recojo el valor introducido por el usuario
            let user = oDom.eInputName.value
            // Saco en el html, en la etiqueta output introduzco el valor que teniamos en console antes
            oDom.eOutSaludo.innerHTML = `Hola ${user}` // Podria poner un parrafo = `<p>Hola ${user}</p>`
            console.log(user)
            //console.log(`Hola ${user}`)
        }

        /**
         * Metodo borrar y manejador del evento del boton borrar
         */
        function borrar()
        {
            oDom.eInputName.value = ''
            oDom.eOutSaludo.innerHTML = ''
        }
        
        oDom.eBotonSaludar.addEventListener('click', saludar)
        oDom.eBotonBorrar.addEventListener('click', borrar)
    }
    
    // Se dispara cuando la ventana ha terminado de cargarse, asi podemos poner el script al principio o al final
    window.addEventListener('load', main)
    // OTra forma
    // --> document.addEventListener('DOMContentLoaded', main)


})()




// Este vale para cualquier selector de cualqueir tipo (#id_boton, 'etiqueta')
// let eBotonSaludar = document.querySelector('#btnSaludar') // Anteriormente se utilizaba -> document.getElementById()

// Muestra el objeto que manipula
//console.dir (eBotonSaludar)




