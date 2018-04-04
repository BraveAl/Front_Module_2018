// Una sola vez (que se ejecuta, dentro tiempo)
//let idT = window.setTimeout()
//window.clearTimeout(idT) // quita la anterior, pero no se suele usar y no se coge el id (variable)

// Cada cierto intervalo de tiempo (algo, cada cuanto tiempo)
//let idI = window.setInterval()
//window.clearInterval(idI) // quita la anterior

/* let crono = 0
let idI = window.setInterval(function ()
{
  crono++  
} ,10) */

(function() {

    function main () 
    {
        
        let idI
        let eCrono = document.querySelector('.crono')
        let aBotones = document.querySelectorAll('button') // Devuelve un array con puntero a cada uno de los botones (todos de una tacada)
        // Asocio un manejador de eventos a cada uno de los botones y asocio tambien la funcion
        aBotones.forEach(item => {
            item.addEventListener('click', btnClick)
        });
        aBotones[1].disabled = true
        aBotones[2].disabled = true

        function btnClick(ev)
        {
            let crono = 0
            if(ev.target.id === 'btnIniciar')
            {
                aBotones[1].disabled = false
                aBotones[2].disabled = false
                aBotones[0].disabled = true
                aBotones[0].textContent = 'Continuar'
                idI = window.setInterval(function ()
                    {
                        crono += 0.01 
                        eCrono.innerHTML = crono.toFixed(2) // toFixed indicas la precision de decimales
                    } ,100) 

            }else if (ev.target.id === 'btnParar')
            {
                aBotones[0].disabled = false
                aBotones[1].disabled = true
                window.clearInterval(idI)
            }else
            { // btnReset
                aBotones[0].disabled = false
                crono = 0
                eCrono.innerHTML = crono.toFixed(2)
                aBotones[1].disabled = true
                aBotones[2].disabled = true
                aBotones[0].textContent = 'Iniciar'
            }
        }

    }

    


    window.addEventListener('load', main)
})()




