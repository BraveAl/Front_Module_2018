function main (){

    let num1 = 23
    let num2 = '54'

    let r = num1 - parseInt(num2)
    let m = num1 - num2
    console.log(r)
    console.log(m)
    console.log(typeof r)
    console.log(typeof m)

    // AL sumar un numero con un string predomina el string y junta ambos numeros como una sola cadena
    // Casting con funcion Number, String
    m = num1 + Number(num2) 
    // Lo mismo pero sin casting
    m = num1 + +num2
    // Para checkear los NaN
    isNaN(m)
}

main()

