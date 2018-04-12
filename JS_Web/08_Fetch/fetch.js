function main ()
{
    document.querySelector('#btnAjax').addEventListener('click',getDatos)

    function getDatos ()
    {
        let metodo = 'GET'        
        let url = 'http://localhost:3000/posts'

        fetch(url).then((data) =>{console.log(data.json()})// Se ejecuta la funcion arrow cuando lleguen los datos
    }
}


window.addEventListener('load', main, false)