app = 
{
    cadena: '',
    codigo: 0,
    aMensajes : [
        'se mezclan Mayúsculas y minúsculas',
        'Todas las letras son Mayúsculas',
        'Todas las letras son minúsculas'],
    comprobarMayusculas: function () 
    {
        this.codigo = 0

        if (this.cadena.toUpperCase() === this.cadena)
        {
            // Todo en mayuscula
            this.codigo = 1
        } else if (this.cadena.toLowerCase() === this.cadena)
        {
            // Todas en minuscula
            this.codigo = 2
        } else
        {
            this.codigo = 0
        }
    },
    print: function ()
    {   
        this.comprobarMayusculas()
        let sMensaje = `
            En la frase "${this.cadena}"
            ${this.aMensajes[this.codigo]}` // Tambien se invocan los metodos dentro de metodos con el this
        console.log(sMensaje)
    
    }
}

app.cadena = 'Hola PEPE'
app.print()

