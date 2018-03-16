// Reconocer si un numero es par o impar

function isPar(numero)
{
    let par = 'NAN' // -1
    
    if (!isNaN(numero))
    {
        if(parseInt(numero)!=parseFloat(numero))
        {
            par = 'No entero' // -2
        }
        else
        {
            if(numero%2 == 0)
            {
                par = 'Es par' // 0
            }
            else
            {
                par = 'No es par' // 1
            }
        }
        
        
    }
    
    return par
} 

// Codificar a numeros para que sea mas compacto en JS
// -1 : Impar
//  0 : Par
function isParShort (numero)
{
    return isNaN(numero/2) ? -1 : numero%2
}

/* function sayPar(par)
{
    console.log(par);
} */

//let x = 'pepe'
//sayPar(isPar('pepe'))


//*******************************************/

// Mostrando mensajes en arrays, asociando el dato en la informacion
function mostarEsPar (n)
{
    const aMensajes = [
        `El numero ${n} es par`,
        `El numero ${n} es impar`,
        `El dato ${n} no es un numero`]
    let r = isParShort(n)
    r = (r === -1) ? 2 : r
    console.log(aMensajes[r])
}

// Mostrando mensajes en arrays, asociando el dato en la informacion
function mostarEsParDeci (n)
{
    const aMensajes = [
        `El numero ${n} es par`,
        `El numero ${n} es impar`,
        `El dato ${n} no es un numero`,
        `El numero ${n} es un decimal`]
    let r = isParShort(n)
    if (r === -1) {r = 2}
    if (r === -2) {r = 3}
    
    console.log(aMensajes[r])
}


/** Funcionamiento del switch */

switch(r)
{
    case 0:
        // sentencias
        break
    case 1:
        // sentencias
        break
    case 2:
        // sentencias
        break
    default:
        // sentencias
}