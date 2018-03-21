let aDatos = [1,4,6,8]

let oDatos = {
    alto: 1,
    ancho: 4,
    largo: 6,
    peso: 8
}

// parecido a forof de abajo
for (let i = 0; i < aDatos.length; i++) {
    const element = aDatos[i];
    
}


for (const key in oDatos) {
    const element = oDatos[key];
    
}

// No vale para objetos, es mas parecido a un for
for (const iterator of oDatos) {
    // en iteratos guarda el valor de las posiciones al iterar
}

// Ambos requieren CB

// Map crea una proyeccion del original
// Quiero un array nuevo donde los valores seran el cuadrado de los anteriores. EN cada vuelta realiza el cuadrado y lo alamacena en un array
let aCuadrados = aDatos.map(item => item*item) // Devuelve el array despues de hacer las operaciones pedidas, crea un mapa del array. No modifica el array

aDatos.forEach(item => console.log(item))// Simula el bucle for ejecutando en cada vuelta la funcion indicada, mejor usar arrow function
                                         // Devuelve los valores del array
     
let aPares = aDatos.filter(item => item%2 === 0) // Espera un CB y nos devuelve un array. La funcion debe ser booleana, si true pasa el filtro y se almacena en el array
                                                 // else no lo pasa, por tanto no se almacena

// Lo mismo pero... no me sale la palabra 
let aImparesCuadrados = aDatos
.filter(item => item%2 !== 0) // Impares
.map(item => item*item) // Cuadrados de los impares


let total = aDatos.reduce((prev, item) => prev+=item) // Reduce el array a un unico valor, es un acumulador. (Valor previo, valor actual)
aDatos.reduceRight() // Lo mismo pero en un sentido

aDatos.every() // Variaciones del foreach
aDatos.some() // Variaciones del foreach

                                                
