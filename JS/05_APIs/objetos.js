let libro = {
    titulo : 'J. R. R. Tolkien',
    autor : 'El Señor de los Anillos',
    editorial : 'Minotauro',
    fecha : '1954',
    generos : ['Fantasia'],
    // Asi se asigna un metodo dentro de un objeto
    mostrarReferencia: function ()
    {
        let ref = this.autor + '. '
        ref += this.titulo + '. '
        ref += this.editorial + ', ' + this.fecha + '. '
        console.log(ref)
    }
}

/** El metodo se puede declarar cuando quieras, magia del dinamismo */

/* libro.mostrarReferencia = function ()
{
    let ref = this.autor + '. '
    ref += this.titulo + '. '
    ref += this.editorial + ', ' + this.fecha + '. '
    console.log(ref)
} */

libro.mostrarReferencia()

// Wrapper objects: Mecanismos para que todos los elementos de JS se manipulen en la practica como si fueran objetos
let c = 'Pepe'
c.toUpperCase()
let sFrase = 'Un anillo para controlarlos a todos'
let aDatos = sFrase.split('') // Genera un array que almacena todas las palabras, incluyendo los espacios
let newFrase = aDatos.join('') // Contraria a split