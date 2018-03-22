class Persona
{
    constructor(nombre, fecha, altura)
    {
        this.nombre = nombre
        this.fechaNacimiento = fecha
        this.altura = altura
    }

    // COn la raya baja indico que es privado, pero solo por convenio
    _calcularAños()
    {
        let hoy = new Date()
        let años = parseInt((hoy - this.fechaNacimiento)/(1000*60*60*24*365))
        return años
    }

    saludar()
    {
        console.log(`Hola, soy ${this.nombre}
        y tengo ${this._calcularAños()}`)
    }
    
}

let persona1 = new Persona("Alberto Perez", new Date(1995,3,3), 1.70)
persona1.saludar()

class Alumno extends Persona
{
    constructor(nombre, fecha, altura, aula, equipo)
    {
        super (nombre, fecha, altura)
        this.aula = aula
        this.equi = equipo
    }
    
    // Sobrescritura de metodos
    saludar()
    {
        super.saludar() // Hago lo del metodo padre
        console.log(`Soy del equipo ${this.equi}`)
    }
}

let Alumno = new ("Alberto Perez", new Date(1995,3,3), 1.70, 'B.0.4', 'Equipo Alfa')
