
// aDatos es una INSTANCIA de Array
let aDatos = [1, 23, 34]

// Declarando objetos
let aDatos = new Array() // Un dato en los parentesis -> length; mas de un dato --> Son los valores del array
let aLetras = ['A', 'Ñ', 'O', 'K', 'H']

// Metodos de Arrays
// Inmutables
// Mutables

aLetras.join('') // Devuelve un resultado pero no modifica la variable --> Inmutable
aLetras.sort() // Modifica el valor original del array --> Mutable

aLetrasOriginal = aLetras.slice(0, aLetras.length-1) // Hago una copia del array

// Mutable
let aNuevo = aLetras.splice(0,2) // Le quito el trozo desde 0-9 de aLetras y lo almaceno en aNuevo
let aNuevo = aLetras.splice(0,2, "UU","EEE") // Hago lo anterior y ademas añado UU y EEE en las posiciones primeras del array
let aNuevo = aLetras.splice(3,1) // ELimino el elemento 3 splice(posicion, nº de elementos desde la posicion)

aLetras.push() // Añadir al final
aLetras.unshift() // Anadir al principio
aLetras.pop() // quitar ultimo
aLetras.shift() // quitar primero
