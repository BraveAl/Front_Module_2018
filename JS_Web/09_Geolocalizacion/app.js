function app (){
    navigator.geolocation.getCurrentPosition( (position) => { // recojo el parametro position
        console.dir(position) // pAsas la latitud y altitud al api de google map y listo
    })
}


window.addEventListener('load', main)