function factorial(num)
{
    // con throw disparamos excepciones
// throw 0, throw 1, throw 2, throw 3--> esto es para el ejercicio del factorial, por lo que lanzarias esos valores
    let factorial = 1
    for (let i=n; n > 0; n--)
    {
        factorial *= n
    }
    return factorial
}

function factorialTry(n)
{
    if (typeof n === 'undefined') {throw 0}
    else if (isNaN(n/2)) { throw 1}
    else if (parseInt(n) !== parseFloat(n)) { throw 2}
    else if (n <= 0) { throw 3}
    else 
    {
        let factorial = 1
        for (let i=n; n > 0; n--)
        {
            factorial *= n
        }
        return factorial
    }
}

function print(factor)
{
    console.log(`El factorial de ${factor}` + factorial(factor))
}

function printTry(n)
{
    const ERROR_BASE = 'No puedo calcular el factorial de '
    aErrores = [
        'nada',
        'algo no numerico',
        'un numero con decimales',
        'un numero menor que 0'
    ]
    try {
        // metodo factorial que genera excepciones
        factorial(n)
        console.log(factorialTry(n))
    } catch (error) {
        console.log(ERROR_BASE + aErrores[error])
    }
}

print(9)

// con throw disparamos excepciones
// throw 0, throw 1, throw 2, throw 3--> esto es para el ejercicio del factorial, por lo que lanzarias esos valores