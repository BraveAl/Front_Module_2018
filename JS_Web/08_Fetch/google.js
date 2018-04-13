function main () {

    document.querySelector("#btnFetchItem")
    .addEventListener('click', getDatos)

    
    function getDatos(ev) {
        let metodo = 'GET'
        let url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
        
        

        if(ev.target.id == 'btnFetchItem')
        {
            let item = document.querySelector('#item').value // Cojo el valor de item (boton numerico)
            console.log(item)
            url += item
            console.log(url)

            //url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
        }else{//ev.target.id == 'btnAjaxItem'
            
            return // Si el usuario no selecciona el item y se pulsa el boton --> Salgo y no hago nada --> No ejecuto Ajax
        
        }

        fetch(url)
        .then( response => response.json() )
        .then( data => console.log(data) ) // Son los datos datos.volumeInfo.title

    }
}

window.addEventListener('load', main, false)