function isParShort (numero)
{
    return isNaN(numero/2) ? -1 : numero%2
}

/** Si queremos devolver parciales se crea un objeto con valor de la suma y los parciales, retornamos el objeto
 *  let data = {
 *      total : 0,
 *      parciales : []
 * }
 * 
 *  data.parciales[data.parciales.length] = aDatos[i] // Crece dinamicamente
 */

function sumarPares (aDatos)
{
    let pares = 0
    for (let i=0; i<aDatos.length; i++)
    {
        if(isParShort(aDatos[i])=== 0)
        {
            pares += aDatos[i]
        }
    }

    return pares
}


function printSum(pares)
{
    console.log(sumarPares(aDatos))
}

let aDatos = [2, 5, 8, 12, 7, 4]

printSum(aDatos)
