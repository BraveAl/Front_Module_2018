
// Objeto literal
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

    user.cargo = "CEO"

// Otros tipos de objects

//Array
// EL array puede tener todo tipo de datos, el manejo es igual que en java
let aDatos = [12,685,63574,5687,6587]
let aDatosPenoso = [12,'pepe',true,null,undefined]
// Puedes guardar datos en cualquier posicion
aDatos[15] = 40

// Array de objetos en formato JSON

let aUsuario = [
    {nombre:'Alber', 
    apellido:'Perez', 
    direccion: {
        calle:'',
        ciudad:'',
        c_postal:''
    },
    edad:23, 
    isMarried:true},
    {nombre:'Alber', 
    apellido:'Perez', 
    direccion: {
        calle:'',
        ciudad:'',
        c_postal:''
    },
    edad:23, 
    isMarried:true}
]


console.log(Array.isArray(aUsuario))

// Mas variables

let fecha = new Date()
let exp = new RegExp()
let erro = new Error()





