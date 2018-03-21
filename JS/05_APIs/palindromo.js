
// Funcion que compara si una cadena es un Palindromo o no
function palindromo (cadena)
{
    // QUitamos los espacios, damos la vuelta a la frase (aPalinReverse) y ponemos todo en minuscula
    //let aPalinReverse = cadena.slice(0, cadena.length).split(' ').join('').split('').reverse().join('').toLowerCase()
    let aPalinReverse = cadena.split(' ').join('').split('').reverse().join('').toLowerCase()
    let aPalindromo = cadena.split(' ').join('').toLowerCase()

    // Quitamos acentos y comas
    aPalindromo = cleanString(aPalindromo)
    aPalinReverse = cleanString(aPalinReverse)
    
    let isPal = 0
    
    if (aPalinReverse === aPalindromo)
    {
        isPal = 1
    }    
    // isPal = aPalinReverse === aPalindromo ? 1 : 0
    return isPal
}

// Funcion que quita los acentos y comas
function cleanString(cadena)
{
    /** Sintaxis: /á/gi Con la "/" inicial y la "/" final indicamos el inicio y fin de la cadena a buscar. 
     * Con la "g" le indicamos que sea global --> que busque la expresion regular en toda la cadena y no solo en la primera ocurrencia. 
     * Con la "i" le indicamos que sea indiferente a mayusculas y minusculas. La i no seria necesaria ya que la cadena viene en minusculas ya */

    cadena = cadena.replace(/á/gi,"a")
    cadena = cadena.replace(/é/gi,"e")
    cadena = cadena.replace(/í/gi,"i")
    cadena = cadena.replace(/ó/gi,"o")
    cadena = cadena.replace(/ú/gi,"u")
    cadena = cadena.replace(/,/g,"") // Quitamos i porque la coma es igual en mayuscula que minusculas

    return cadena
}

// Imprimir por pantalla
function print (chain)
{
    if(palindromo(chain) === 0) {console.log(`La cadena "${chain}" no es un Palindromo`) }
    else{console.log(`La cadena "${chain}" es un Palindromo`)}
    
}

print ('Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla')
print ('Allí por la tropa no portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla')

