import { CURSOS } from './cursos.js'

export class Formulario {
    constructor() {
        this.datos = {
            nombre: '',
            apellido: '',
            nacimiento: '',
            email: '',
            passwd: '',
            datos: '',
            curso: {},
            asignaturas: [],
            passwdR: ''

        }

        this.accederDom()
        this.definirManejadores()
        this.ponerFecha()
    }

    accederDom() {
        this.domFormulario = document.querySelector('#form1')
        this.domVolar = document.querySelector('#volar')
        this.domCorrer = document.querySelector('#correr')

        this.domInpNombre = document.querySelector('#nombre')
        this.domInpApellido = document.querySelector('#apellido')
        this.domInpFecha = document.querySelector('#fecha')
        this.domInpEmail = document.querySelector('#email')
        this.domInpPasswd = document.querySelector('#passwd')
        this.domInpPasswdR = document.querySelector('#passwdR')
        this.domSelectCurso = document.querySelector('#curso')
        this.domSelectTopics = document.querySelector('#topics')
        this.domDivTopics = document.querySelector('#div_topics')
        this.domDivResultados = document.querySelector('#resultados')
        this.donBtnReset = document.querySelector('#reset')

        //this.domFieldAcedemic = document.querySelector('#acedemic')
        this.domTiempo = document.querySelector('#tiempo')
    }

    definirManejadores() {
        this.domFormulario.addEventListener('submit', this.enviar.bind(this))
        //this.domBtnReset.addEventListener('click', this.reset.bind(this))
        
        this.domSelectCurso.addEventListener('change', this.presentarAsignaturas.bind(this))

        // Para radioButton el evento es 'checked'
    }

    /*   saludar() {
          console.log('Hola amigos')
      } */

    enviar(ev) {
        console.log(ev)
        ev.preventDefault()
        this.recogerDatos()
        this.comprobarPasswd()
        this.presentarDatos()



    }

    comprobarPasswd() {
        console.log('Estoy pass')
        if (this.domInpPasswd.value !== this.domInpPasswdR.value) {
            alert('Los passwords no coinciden')
            console.log('Estoy aqui')

        }

    }

    /* borrar () {
    } */
    /* 
        completar() {
            // this.domFieldAcedemic.disabled = !this.domFieldAcedemic.disabled
            this.domFieldAcedemic.classList.toggle('ocultar')
            if (this.domFieldAcedemic.classList.contains('ocultar')) {
                this.domRadioTurno[0].checked = true
                this.domSelectCurso.selectedIndex=0 
            }
        } */

    ponerFecha() {
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        let f = new Date();
        this.domTiempo.innerHTML = ` Estamos a ${f.getDate()} de ${meses[f.getMonth()]} de ${f.getFullYear()} y es un buen dia para hacer un examen`

    }
    recogerDatos() {
        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.nacimiento = new Date(this.domInpFecha.value)
        this.datos.email = this.domInpEmail.value
        this.datos.passwd = this.domInpPasswd.value
        this.datos.curso = this.procesarSelect(this.domSelectCurso)
    }

    /*  procesarRadio(nodo) {
         let value
         nodo.forEach( (item ) => {
             if (item.checked) {
                 value = item.value
             }
         })
         return value 
     } */

     

    procesarSelect(nodo) {
        let index = nodo.selectedIndex
        return {
            code: nodo.options[index].value,
            text: nodo.options[index].textContent
        }
    }

    presentarAsignaturas(ev) {
        ev.target.firstElementChild.classList.add('ocultar')
        let topics = CURSOS[ev.target.selectedIndex - 1].asignaturas
        let HTMLResult = ''
        topics.forEach(elem => HTMLResult += `<option>${elem}</option>`)
        this.domDivTopics.classList.remove('ocultar')
        this.domSelectTopics.innerHTML = HTMLResult
    }

    presentarDatos() {
        let resultadoHTML =
            `<h2>Resultados</h2>
        <ul>
            <li>Nombre: ${this.datos.nombre}</li>
            <li>Apellido: ${this.datos.apellido}</li>
            <li>Fecha nacimiento: ${this.datos.nacimiento}</li>
            <li>e-Mail: ${this.datos.email}</li>
            <li>Contraseña: ${this.datos.passwd}</li>
            <li>Asignaturas: ${CURSOS[this.seleccionarIndexCurso()].asignaturas}</li>
            <li>Curso: ${this.datos.curso.text}</li>
            <li>Aficiones: ${this.domVolar.value}</li>
        </ul>
        `
        this.domDivResultados.innerHTML = resultadoHTML
        console.dir(this.datos)

    }

    seleccionarIndexCurso() {
        //console.log("estouy dentro")
        let index;
        for (let i = 0; i < CURSOS.length; i++) {
            //console.log(CURSOS[i].titulo)
            //console.log(this.datos.curso.text)
            if (this.datos.curso.text === CURSOS[i].titulo) {
                index = i
                break
            }

        }
        console.log(index)
        return index

    }

}