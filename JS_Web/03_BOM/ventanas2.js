function main () 
{
    // Asocio elemento del DOM a mi boton
    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    // Propiedad disabled de los botones
    eBtnCerrar.disabled = "true"
    let ventana
    let aVentana = []

    // Asocio manejador a mi boton anterior
    eBtnAbrir.addEventListener('click', btnClick)
    eBtnCerrar.addEventListener('click', btnClick)

    function btnClick(ev)
    {
        
        switch (ev.target.id)
        {
            case 'btnAbrir':
                ventana = window.open()
                //aVentana.push(ventana)
                invertirBtn()
                break
            case 'btnCerrar':
                //aVentana.forEach((v)=>{v.close()})
                invertirBtn()
                aVentana = []
                break


        }
    }

    function invertirBtn()
    {
        // Lo que quiero es invertirlo, por tanto pongo lo contrario a como estaba
        eBtnAbrir.disabled = !eBtnAbrir.disabled
        eBtnCerrar.disabled = !eBtnCerrar.disabled
    }
}

window.addEventListener("load", main)





