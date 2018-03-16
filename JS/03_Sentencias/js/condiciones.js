// Condiciones

// If-else anidados

const userMike = {
    nombre: 'Mike',
    apellido: 'Rourke',
    edad: 23,
    aficiones: ['deporte', 'musica'],
    isCasado: false,
    genero: 'M' 
}

const userMaria = {
    nombre: 'Maria',
    apellido: 'Lopez',
    edad: 98,
    aficiones: ['deporte', 'lectura'],
    isCasado: true,
    genero: 'F' 
}

const MAYOREDAD = 18

function crearSaludo(user)
{
    //console.log('Hola ' + user.nombre)
    let mensaje = 'Hola'

    if (user.edad >= MAYOREDAD)
    {
        mensaje += ' D/Dña. ' //+ user.nombre
    } 
    
    mensaje += user.nombre
    
    

    if (user.isCasado)
    {
        if (user.genero == 'F')
        {
            mensaje += '. Saludos a tu marido'
            //console.log('Saludos a tu marido')
        }else 
        {
            mensaje += '. Saludos a tu mujer'
            //console.log('Saludos a tu mujer')
        } 
        
    } 

    return mensaje
}

function saludar(usuario)
{
    console.log(crearSaludo(usuario))
}

function saludarHTML(usuario)
{
    // Document es el objeto document de todo el html, write escribe en el html
    document.write(crearSaludo(usuario)+'<br>')
}

saludar(userMaria)
saludarHTML(userMaria)
saludarHTML(userMike)

