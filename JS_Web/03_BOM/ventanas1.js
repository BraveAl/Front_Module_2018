function main () 
{
    // Asocio elemento del DOM a mi boton
    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    eBtnCerrar.disabled = "true"
    

    let ventana
    let aVentana = []

    // Asocio manejador a mi boton anterior
    eBtnAbrir.addEventListener('click', btnAbrir)
    eBtnCerrar.addEventListener('click', btnCerrar)

    

    function btnAbrir()
    {
        ventana = window.open()
        invertirBtn()
        aVentana.push(ventana)
    }

    function btnCerrar()
    {                
        aVentana.forEach(item=>v.close())
        invertirBtn()
        aVentana = [] // Limpiar el array y le deja vacio
        
    }

    function invertirBtn()
    {
        // Lo que quiero es invertirlo, por tanto pongo lo contrario a como estaba
        eBtnAbrir.disabled = !eBtnAbrir.disabled
        eBtnCerrar.disabled = !eBtnCerrar.disabled
    }
}

window.addEventListener("load", main)





