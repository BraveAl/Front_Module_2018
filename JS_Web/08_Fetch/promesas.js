/** Mock de una promesa (simulacion) */



function asincP ()
{
    // Crear la promesa
    return new Promise(
        // Debe tener dentro una funcion que recibe parametros resolve y reject. New Promise le pasa esos dos parametros que ya sabe lo hay que hacer
        (resolve, reject) => {
            
            // Para crear asincronia --> setTimeout
            setTimeout(
                () =>{
                    let numero = Math.random()
                    if (numero < 0.7){
                        // correcto
                        resolve(numero)
                    }else {
                        // incorrecto
                        reject(numero)
                    }
                }, 3000)
        }
    )
    
}

// Consumir la promesa, la promesa tiene dos funciones
asincP().then(
    (response) => { console.log(`Todo bien, gracias al ${response}`)} // Se recibiria el dato enviado por resolve)
    //(response) => { console.log(`Error, debido a ${response}`)} // Se recibiria el dato enviado por reject
).catch(   
    (response) => { console.log(`Error, debido a ${response}`)} // Se recibiria el dato enviado por reject
)