function calcularCuadrado (a) 
{
    a *= a
    return a
}

// Los parametros elementales se pasan por valor
let n = 5

console.log(calcularCuadrado(n))


function calcularCubo (params) 
{
    // Se cambia la referencia del valor, por tanto se cambia en tiempo de ejecucion. La forma o crear una variable, sino se deberia hacer un clon del objeto
    params.valor = params.valor*params.valor*params.valor
    return params.valor
}
// Clonar objeto
params2 = Object.assign({},params) // Clona
params3 = JSON.parse (JSON.stringify(params)) // Clona

// Otra forma con el concepto de JSON

// Transformar un objeto en String JSON: Necesario cuando queremos enviar nuestros datos a un servidor
let oUser = {nombre: 'Pepe', apellido: 'Perez'} // A los servidores no se le mandan objetos, sino cadena de caracteres, porque no tiene porque saber JS.
let sUser = JSON.stringify(oUser) // console.log(sUser) --> Aparece un string (cadena de caracteres) con el aspecto de un objeto
let oUser2 = JSON.parse(sUser) // console.log(oUser2) --> Convierte en objeto la cadena de string anterior, donde se clona el objeto referenciando a otra zona de memoria

// Los parametros referencia pasan como si fuera por referencia
// Y es habitual pasar un clon del objeto
params = {valor:5}
// Pasandole el clon el valor del objeto params no se modifica
console.log(calcularCubo(params2))
console.log(params)



