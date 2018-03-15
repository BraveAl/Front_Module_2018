// variables locales y globales

'use strict'

// En JS las llaves no determinan el ambito de accion
// Se recomienda que sean declaradas en mayusculas

function mostrar()
{
    const X = 2
    {
        const X = 23
    }
    console.log(X)
}

const X = 5
mostrar()

function calcularCircunferencia(radio)
{
    return 2*Math.PI*radio
}

function mostrarCircunferencia (radio)
{
    let cir = calcularCircunferencia(radio)
    // Con las comillas francesas me respeta los saltos de linea y con el ${} mostramos los valores de las variables
    console.log(`
    La circunferencia de radio ${radio}
    tiene de longitud ${cir}`)
}

mostrarCircunferencia(7)

