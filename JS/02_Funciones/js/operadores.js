// Asignacion
let x = 25

// Instruccion --> side effect
console.log(x)

// 
x++
//x = x + 1

// Caso particular en la asignacion, en z primero se incremente y luego se asigna
// a posteriori primero se queda con el valor y luego lo incrementa x++
let z = ++x

x = 24
y = parseInt(x/5) //5 --> Para forzar la division de enteros se usa el parseInt, js no fuerza a entero aun existiendo un int
let r = x % 5 //2

// Operadores de asignacion aritmetica
x = 12
x+=12 //16

// Operadores relacionales, realiza el sistema un casting para igualar
x = 12
y = '12'
console.log(x == y) //true
console.log(x === y) //false, porque comprueba si son el mismo tipo de variable

// Para convertir cualquier cosa en boolean solo hay que negarlo dos veces
!!x

// Los string los compara en orden alfabetico
x = 'abc'
y = 'def'

console.log(x < y) //true
console.log(x.lenght < y.lenght) //true (compara longitud)
 
// Operadores ternarios 
// expresion ? true : false

let edad = 12
console.log(edad < 30 ? 'Buenos dias': 'Hola chaval') // Es como un if compacto

