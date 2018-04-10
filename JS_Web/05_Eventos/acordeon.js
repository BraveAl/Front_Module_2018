class Acordeon
{
    constructor()
    {
        this.oPregunta = document.querySelector(".pregunta")
        this.oRespuesta = document.querySelector(".respuesta")
        oPregunta.array.forEach(item => {
            item.addEventListener('click', mostrar)
        });
    }
    
    mostrar () {
        this.oElemento.classList.toggle("respuesta")
        if (this.oElemento.className.indexOf("respuesta") >=0 ) {
           this.oEnlace.innerHTML = "Seguir leyendo";
        }
        else { // elemento.className incluye "visible")
            this.oEnlace.innerHTML = "Ocultar artículo";
        }
    }
    
}

document.addEventListener("load", main); 