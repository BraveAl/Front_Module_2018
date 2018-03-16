function isParShort (numero)
{
    return isNaN(numero/2) ? -1 : numero%2
}


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