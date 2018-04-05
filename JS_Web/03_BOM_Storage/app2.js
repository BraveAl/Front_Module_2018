(function () 
{

    /**
     * La funcion almacena en cache local un nombre y cuando cierras y abres el nombre se queda guardado al cargar de nuevo la pagina
     */
    function main ()
    {
        let eNombre = document.querySelector("#inpNombre")
        let eApellido = document.querySelector("#inpApellido")
        let eGuardar = document.querySelector("#btnGuardar")
        let eBorrar = document.querySelector("#btnBorrar")
        let eSaludo = document.querySelector("#outSaludo")

        eGuardar.addEventListener('click', guardar)
        eBorrar.addEventListener('click', borrar)

        saludar()
        
        function guardar()
        {
            let persona = {
                nombre: eNombre.value,
                apellido: eApellido.value
            }
            localStorage.setItem('persona', JSON.stringify(persona)) // Guarda en cookies informacion, dentro de LocalStorage
            saludar()
        }

        function borrar()
        {
            localStorage.removeItem('persona')
            eSaludo.innerHTML = ''
            eNombre.value = ''
            eApellido.value = ''
        }

        function saludar ()
        {
            let persona = localStorage.getItem('persona')
            persona = JSON.parse(persona)
            if (persona.nombre || persona.apellido)
            {
                eSaludo.innerHTML = `Hola ${persona.nombre} ${persona.apellido}` 
            }
        }

    }


window.addEventListener('load', main)
})()