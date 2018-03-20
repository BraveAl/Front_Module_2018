/** Funcion "clasica" asiganda a variable **/

let  calcularCubo = function (a) 
{
    return a*a*a
}

/** En ES6 tenemos las funciones "arrow" (lambdas) asignada a variable 
 ** =>
 ** utiles cuando se trabaja con funciones puras
*/

// Formato extenso
let calcularCuboES6 = (a) => { return a*a*a} // Igual que la de arriba en ES6 

// Abreviado si solo hay un parametro y si solo devuelve un parametro. Si hay varias lineas se debe respetar las llaves y la estructura
let calcularCuboES6 = a => a*a*a

setTimeout(calcularCuboES6, 3000)
// Mas habitual poner CB en formato lambda
setTimeout(a => a*a*a, 3000)