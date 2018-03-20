// Funcion anonima autoinvocada (es como si fuera un main)
// Denominado Clousure ==> patron IIFE (Inmediately-invoked function expression)

(function (n)
{
    function calcularCubo (a) 
    {
        a = a*a*a
        return a
    }   

    let mostrarResultado2 = function ()
    {
        console.log(calcularCubo(n))
    }

    mostrarResultado2() // Ejecutar funcion asignada
})(6) // Funcion auto invocada --> (Funcion)(invocacion)



                    





