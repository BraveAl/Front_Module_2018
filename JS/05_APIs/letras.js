/** @function : Comprobar si la cadena es:
 *  - todo mayusculas (1)
 *  - todo minusculas (2)
 *  - mezcla de ambas (0)
 * @param : string
 * @returns: number
 */

function comprobarMayusculas(cadena = '')
{
    let r = 0

    if (cadena.toUpperCase() === cadena)
    {
        // Todo en mayuscula
        r = 1
    } else if (cadena.toLowerCase() === cadena)
    {
        // Todas en minuscula
        r = 2
    } 

    return r
}

//console.log(comprobarMayusculas('hola Pepe'))

function printAll(cadena)
{
    aMensajes = [
        'se mezclan Mayúsculas y minúsculas',
        'Todas las letras son Mayúsculas',
        'Todas las letras son minúsculas'
    ]

    let sMensaje = `
        En la frase "${cadena}"
        ${aMensajes[comprobarMayusculas(cadena)]}`
    console.log(sMensaje)

}

printAll('OOOOO')
