/** libro
 *  - titulo
 *  - autor
 *  - editorial
 *  - fecha
 *  - generos
 */

 // Creamos objeto libro (plantilla)
 let libro = {
     titulo : '',
     autor : '',
     editorial : '',
     fecha : 2000,
     generos : []
 }

 // Propiedad de Object que permite crear a partir de un objeto empty tantos objetos como desee (clonar)
 let libro1 = Object.create(libro)
 let libro2 = Object.create(libro)

 libro1.autor = 'J. R. R. Tolkien'
 libro1.titulo = 'El Señor de los Anillos'
 libro1.editorial = 'Minotauro'
 libro1.fecha = '1954'
 libro1.generos = ['Fantasia']

 libro2.autor = 'William Gribson'
 libro2.titulo = 'Neuromante'
 libro2.editorial = 'Minotauro'
 libro2.fecha = '1954'
 libro2.generos = ['SciFi', 'CyberPunk']
 
 console.log(libro1)
 



// Para recorrer un objeto se usa el "forin"
// key es donde voy almacenando los distintos valores (atributos)
// OTra forma de acceder a una variable de un objeto es mediante [variable], ejemplo, libro1[variable] (libro1[autor] ==> libro1.autor)
// Con "key in libro1" lo que hace es guardar en key ==> autor,...

for (let key in libro1) {
    console.log(`La clave ${key} vale `, libro1[key])
    /* if (object.hasOwnProperty(key)) {
        const element = object[key];        
    } */
}


