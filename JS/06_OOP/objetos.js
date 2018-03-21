let libro = {
    titulo : 'J. R. R. Tolkien',
    autor : 'El Señor de los Anillos',
    editorial : 'Minotauro',
    fecha : new Date ('1954'),
    generos : ['Fantasia'],
    mostrarReferencia: function ()
    {
        let ref = this.autor + '. '
        ref += this.titulo + '. '
        ref += this.editorial + ', ' + this.fecha + '. '
        console.log(ref)
    }
}

// libro.propietario = 'Alberto' // ASigno una nueva propiedad


let miFuncion = function () 
{
    console.log("Soy un funcion")
    console.log(this)
}

// Patron de invocacion Funtion
// this es el objeto global del programa (del host donde me encuetre)
miFuncion()

// PAtron de invocacion method
let o = { head: 'Soy un objeto',      // Esto lo hemos hecho porque necesitamos que sea un objeto
        metodo: miFuncion}
o.metodo() // Ahora this es el objeto

// Patron de invocacion Constructor
let oNuevoObjeto = new miFuncion() // Devuelve un nuevo objeto y le asigna this a ese nuevo objeto creado

// Patro de invocacion Apply
// Permite definir el valor de this
let a = { head: 'Soy un objeto'}
miFuncion.call(a) // This es el objeto