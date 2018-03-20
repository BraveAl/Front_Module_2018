// Funcion anidada en otra funcion
function main ()
{
    function calcularCubo (a) 
    {
        a = a*a*a
        return a
    }   

    let n = 6

    let mostrarResultado2 = function ()
    {
        console.log(calcularCubo(n))
    }

    console.log(typeof n)
    console.log(typeof mostrarResultado2)

    mostrarResultado2() // Ejecutar funcion asignada

    return calcularCubo // Devuelve la funcion en si, en JS es posible
}

console.log (main()(4)) // Como devuelve una funcion yo puedo ejecutarla (main()(4)) --> <funcion()(ejecucion funcion devuelta)>
                        // equivale a: let f = main(); console.log (f(5))
                    





