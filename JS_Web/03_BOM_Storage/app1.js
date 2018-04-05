(function () 
{

    /**
     * La funcion almacena en cache local un nombre y cuando cierras y abres el nombre se queda guardado al cargar de nuevo la pagina
     */
    function main ()
    {
        let eNombre = document.querySelector("#inpNombre")
        let eGuardar = document.querySelector("#btnGuardar")
        let eBorrar = document.querySelector("#btnBorrar")
        let eSaludo = document.querySelector("#outSaludo")

        eGuardar.addEventListener('click', guardar)
        eBorrar.addEventListener('click', borrar)

        function guardar()
        {
            let nombre = eNombre.value
            localStorage.setItem('nombre', nombre) // Guarda en cookies informacion, dentro de LocalStorage
            saludar()
        }

        function borrar()
        {
            localStorage.removeItem('nombre')
            eSaludo.innerHTML = ''
            eNombre.value
        }

        function saludar ()
        {
            let nombre = localStorage.getItem('nombre')
            if (nombre)
            {
                eSaludo.innerHTML = `Hola ${nombre}` 
            }
        }

    }


window.addEventListener('load', main)
})()