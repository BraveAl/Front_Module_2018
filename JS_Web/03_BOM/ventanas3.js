function main () 
{
    // Asocio elemento del DOM a mi boton
    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    let eBtnGoogle = document.querySelector('#btnGoogle')
    let eBtnImagen = document.querySelector('#btnImagen')
    
    let ventana
    let aVentana = []

    // Asocio manejador a mi boton anterior
    eBtnAbrir.addEventListener('click', btnAbrir)
    eBtnCerrar.addEventListener('click', btnCerrar)
    eBtnGoogle.addEventListener('click', btnGoogle)
    eBtnImagen.addEventListener('click', btnImagen)

    

    function btnAbrir()
    {
        ventana = window.open()        
        aVentana.push(ventana)
        ventana.document.write('<p>Cosas nuevas</p>')
    }

    function btnImagen()
    {
        ventana = window.open('url de la imagen')        
        aVentana.push(ventana)
        
    }

    function btnGoogle()
    {
        ventana = window.open('https:\\google.es', '', 'top=200, left=300, width=300, height=400, status=yes, menubar=yes') // Te abre en una nueva ventana, no pestaña, con tamaño determinado y posicion
        //ventana = window.open('./ventanas2.html', '', 'top=200, left=300, width=300, height=400, status=yes, menubar=yes') // Te abre el html que le indiques
        aVentana.push(ventana)
    }

    function btnCerrar()
    {                
        aVentana.forEach(item=>item.close())
        
        aVentana = [] // Limpiar el array y le deja vacio
        
    }

    
}

window.addEventListener("load", main)





