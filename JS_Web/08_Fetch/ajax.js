function main() {

    document.querySelector('#btnAjax').addEventListener('click',getDatos)
    document.querySelector('#btnAjaxItem').addEventListener('click',getDatos)
    document.querySelector('#btnAjaxBorrar').addEventListener('click',deleteDatos)
    document.querySelector('#btnAjaxAdd').addEventListener('click',postDatos) // Añadir
    document.querySelector('#btnAjaxPut').addEventListener('click',putDatos)

    // Metodo que obtiene los datos del servidor
    function getDatos(ev) {
        /** Seguimos los pasos de los apuntes */

        
        let metodo = 'GET'        
        let url = ''

        if(ev.target.id == 'btnAjax')
        {
            url = 'http://localhost:3000/posts'
        }else{//ev.target.id == 'btnAjaxItem'
            let item = document.querySelector('#item').value // Cojo el valor de item (boton numerico)
            if(item)
            {
                url = 'http://localhost:3000/posts/'+item
            }else{
                return // Si el usuario no selecciona el item y se pulsa el boton --> Salgo y no hago nada --> No ejecuto Ajax
            }
        }

        connect(metodo,url,null)

        
    }

    // Metodo que borra el elemento del servidor
    function deleteDatos(ev) {
        
        /**
         * 1 - Instanciar objeto
         */ 
        /* let ajax = new XMLHttpRequest()

        // 2 - Funcion de respuesta
        ajax.onreadystatechange = stateChange */ 
        let metodo = 'DELETE'        
        let url = ''
        let item = document.querySelector('#itemB').value // Cojo el valor de item (boton numerico)
            if(item)
            {
                url = 'http://localhost:3000/posts/'+item
            }else{
                return // Si el usuario no selecciona el item y se pulsa el boton --> Salgo y no hago nada --> No ejecuto Ajax
            }
        connect(metodo,url, null)

        /* function stateChange() {
            console.log("Cambio de estado")
            console.log(ajax.readyState) // Nos muestra los cambios de estado (1-4)

            // Estado importante es el final (4), listo para manipular los datos
            if(ajax.readyState === 4)
            {
                console.log("Comunicacion OK")
                if(ajax.status === 200)
                {
                    // Obtenemos un objeto con los datos de neustro post pedido en open (abajo)
                    let response = JSON.parse(ajax.responseText)
                    console.dir(response)
                    
                }else{
                    console.log(ajax.status)
                    console.log(ajax.statusText)
                }
                
            }
        } */

        // 3 - Lanzar el objeto Ajax
        /* let metodo = 'GET'
        let url = 'http://localhost:3000/posts' */

       /*  ajax.open(metodo, url) // depende de la API que queramos consultar en el url
        ajax.send(null) */
    }

    function postDatos () {
        let data = {
            title: "El laberinto azul",
            author: "Preston"
        }
        let metodo = 'POST'
        let url = 'http://localhost:3000/posts'
        connect(metodo,url,JSON.stringify(data))

    }

    function putDatos()
    {
        let metodo = 'PUT'
        let url = ''
        let data = {
            title: "El laberinto azul",
            author: "Preston"
        }
        let item = document.querySelector('#item').value
        if(item)
            {
                url = 'http://localhost:3000/posts/'+item
            }else{
                return // Si el usuario no selecciona el item y se pulsa el boton --> Salgo y no hago nada --> No ejecuto Ajax
            }
            connect(metodo,url,JSON.stringify(data))
    }

    // Metodo responsable de la conexion Ajax
    function connect(metodo,url, data)
    {
        /**
         * 1 - Instanciar objeto
         */ 
        let ajax = new XMLHttpRequest()

        // 2 - Funcion de respuesta
        ajax.onreadystatechange = stateChange

        function stateChange() {
            console.log("Cambio de estado")
            console.log(ajax.readyState) // Nos muestra los cambios de estado (1-4)

            // Estado importante es el final (4), listo para manipular los datos
            if(ajax.readyState === 4)
            {
                console.log("Comunicacion OK")
                if(ajax.status === 200)
                {
                    // Obtenemos un objeto con los datos de neustro post pedido en open (abajo)
                    let response = JSON.parse(ajax.responseText)
                    console.dir(response)
                    
                }else{
                    console.log(ajax.status)
                    console.log(ajax.statusText)
                }
                
            }
        }

        // 3 - Lanzar el objeto Ajax
        /* let metodo = 'GET'
        let url = 'http://localhost:3000/posts' */

        ajax.open(metodo, url) // depende de la API que queramos consultar en el url
        ajax.send(data)

    }
}


window.addEventListener('load', main, false)