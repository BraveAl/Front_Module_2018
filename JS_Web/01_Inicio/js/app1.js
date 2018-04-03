// Como no molan las variables globales, creamos un closure que englobe todo
(function () {
    // Hacemos la funcion main para poder poner el script en el head del html
    function main () 
    {
            // Definicion de variables antes de las funciones
        let oDom = {
            eBotonSaludar : document.querySelector('#btnSaludar')
        }

        // Asignamos el nombre del manejador sin parentesis, para qu eno se ejecute
        // Le asignamos a una funcion anonima, de esta gorma envolvemos la llamada a la funcion a la funcion anonima (en este caso arrow function)
        //oDom.eBotonSaludar.onclick = () => saludo(Event, "Pepe")

        // Mejor añadir un manejador de eventos, primero el evento y luego la funcion
        // Puedes quitar los eventos con .removeEventListener('click',)
        oDom.eBotonSaludar.addEventListener('click', () => saludo(event, "Pepe"))

        function saludo(oE, user='amigo')
        {
            console.log(`Hola ${user}`)
        }
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




