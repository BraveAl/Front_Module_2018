import { CURSOS} from './cursos.js'

export class Formulario {
    constructor() {
        this.datos = {}
        /* this.selectCurso = 
            document.querySelector('#curso') */
        this.radioCurso = document.querySelectorAll('[name="curso"]')
        document.querySelector('form')
            .addEventListener('submit', this.enviar.bind(this), false)        
        this.radioCurso.forEach( (item) => {
            item.addEventListener('change', this.selectTopics.bind(this), false)
        })
        this.crearFecha()
    }

    crearFecha() {
        const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
                "Noviembre", "Diciembre");
        const diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
        let fecha = new Date(); 
        let fechaString = diasSemana[fecha.getDay()] // diaSemana
        fechaString += ', ' + fecha.getDate()  // dia del mes
        fechaString += " de " 
        fechaString += meses[fecha.getMonth()]
        fechaString += " de "
        fechaString += fecha.getFullYear()
        let template = 
        `<p>Hoy es ${fechaString}</p>
        <p>La fecha dada es 18 de Julio de 1975.</p> 
        <p>Dentro de una semana será día ...</p>`
        document.querySelector('#div_fecha')
        .innerHTML = template
    }

    enviar (ev) {
        console.log(ev)
        ev.preventDefault()
        this.recogerDatos()
        this.mostrarDatos()
    }

    selectTopics() {
        let i = this.checkRadio(this.radioCurso)
        let aTopics = CURSOS[i].asignaturas
        this.mostrarTopics(aTopics)
    }

    checkRadio(aRadio) {
        let i
        for (i = 0; i < aRadio.length; i++) {
            if (aRadio[i].checked) {
                break
            }
        }
        return i
    }
    mostrarTopics(aTopics) {
        let template = ''
        aTopics.forEach( item => {
            template += `<option>${item}</option> `
        });
        document.querySelector('#topics').size = aTopics.length
        document.querySelector('#topics').innerHTML = template
    } 


    recogerDatos() {
        this.datos.email = document.querySelector('#email').value
        let i = this.checkRadio(this.radioCurso)
        this.datos.curso = this.radioCurso[i].value
    }

    mostrarDatos() {
       let template = 
       `
       <li>Correo: ${this.datos.email}</li>
       <li>Curso: ${this.datos.curso}</li>
       `
        document.querySelector('#resultados').innerHTML = template
    }
}