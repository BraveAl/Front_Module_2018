// Tipos

let nombre = 'Alber'
let edad = 332
let isMarried = true
let algo
// Notacion JSON es siempre {variable:valor, variable:valor,..}
let user = {
    nombre:'Alber', 
    apellido:'Perez', 
    edad:23, 
    isMarried:true}

// Sacamos el tipo de la variables
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof isMarried)
console.log(typeof algo)
console.log(typeof user)

// Para añadir nuevas variables al objeto se puede hacer de la forma siguiente:
// Los objetos son dinamicos
user.cargo = "CEO"

// Se pueden encadenar objetos dentro de objetos directamente
let user = {
    nombre:'Alber', 
    apellido:'Perez', 
    direccion: {
        calle:'',
        ciudad:'',
        c_postal:''
    },
    edad:23, 
    isMarried:true}