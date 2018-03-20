app = 
{
    cadena: '',
    aMensajes : [
        'se mezclan Mayúsculas y minúsculas',
        'Todas las letras son Mayúsculas',
        'Todas las letras son minúsculas'],
    comprobarMayusculas: function () 
    {
        let r = 0

        if (this.cadena.toUpperCase() === this.cadena)
        {
            // Todo en mayuscula
            r = 1
        } else if (this.cadena.toLowerCase() === this.cadena)
        {
            // Todas en minuscula
            r = 2
        } 

        return r
    },
    print: function ()
    {   
        let sMensaje = `
            En la frase "${this.cadena}"
            ${this.aMensajes[this.comprobarMayusculas(this.cadena)]}` // Tambien se invocan los metodos dentro de metodos con el this
        console.log(sMensaje)
    
    }
}

app.cadena = 'Hola PEPE'
app.print()

/* function comprobarMayusculas(cadena = '')
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
 */