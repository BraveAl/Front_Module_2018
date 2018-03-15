// variables locales y globales

'use strict'

function doSomething()
{
    console.log(x)
}

// Variable global
var x = 12;
doSomething()


// Variable inicializada localmente
var y
function doSome()
{
    y = 4;
}


// En JS las llaves no determinan el ambito de accion
// ES6 existen let y const con ambito {}

function mostrar()
{
    if(true)
    {
        let x = 23
    }
    console.log(x)
}

// Se pueden poner llaves para acotar variables donde quieras (ejemplo, podrias quitar el if y dejar las llaves)