
function calcularCuadrado (a) 
{
    a *= a
    return a
}

function calcularCubo (a) 
{
    a = a*a*a
    return a
}

// Funcion que recibe un numero y una funcion
// La que realmente hace los calculos es la funcion calcular
// Pasar una funcion a otra funcion se llama CALLBACK
function calcular(n, f)
{
    return f(n)
}

function mostrarCalculo (n, f)
{
    console.log(`El resultado es ${f(n)}`)
    
}

let n=5
// Se pasan sin parentesis, porque sino estariamos ejecutando las funciones y solo pasamos las funciones en si (el nombre)
console.log(calcular(5, calcularCuadrado))
console.log(calcular(5, calcularCubo))
// Paso una funcion anonima en el momento que yo quiera
console.log(calcular(n, function(){
    return n*2
}))


mostrarCalculo(n, calcularCuadrado)
mostrarCalculo(n, calcularCubo)
mostrarCalculo(n, function(){
    return n*2
})


// Esperas un tiempo hasta ejecutar la funcion: Ejecuta lo que viene despues y pasado ese tiempo lanza la aplicacion
// Se puede ejecutar el resto de la aplicacion y el CB se ejecutara transcurrido el tiempo definido
// CB: FUNCION QUE PASAMOS COMO PARAMETRO
setTimeout(function() {
    console.log(calcularCubo(n))
}, 2000)

// Una nueva funcion se crea como una variable. Se puede igualar una variable a una funcion
let nuevaFuncion = mostrarCalculo
let nuevaFuncion = mostrarCalculo() // Asi asigno el resultado

/**********************************************************************************************************************************/




