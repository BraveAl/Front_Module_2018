
// Funcion constructora
function Libro (titulo, autor, editorial, fecha, generos) {
    this.titulo = titulo,
    this.autor = autor,
    this.editorial = editorial,
    this.fecha = fecha,
    this.generos = generos,
    this.mostrarReferencias = function ()
    {
        let ref = this.autor + '. '
        ref += this.titulo + '. '
        ref += this.editorial + ', ' + this.fecha + '. '
        console.log(ref)
        return ref
    }
    
}

let libro = new Libro('J. R. R. Tolkien','El Señor de los Anillos', 'Minotauro', new Date ('1954'), ['Fantasia'])
// Siempre s epeude modificar cualquier objeto
libro.propietario = 'Pepe'

let libro2 = new Libro('Wil', 'apsoid', 'asdjsd', 'pueeorjr', 'ekeej')

// Pregunto quien es el constructor de libro 2 y me dice que Libro
//libro2.constructor.name

libro2.mostrarReferencias()

/* let libro = {
    titulo : 'J. R. R. Tolkien',
    autor : 'El Señor de los Anillos',
    editorial : 'Minotauro',
    fecha : new Date ('1954'),
    generos : ['Fantasia'],
    mostrarReferencia: 
} */