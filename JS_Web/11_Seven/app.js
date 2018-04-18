import { CURSOS } from './cursos.js'


export class Formulario {
    constructor() {
        this.datos = {
            nombre: '',
            apellido: '',
            nacimiento: '',
            email: '',
            passwd: '',
            passwd2: '',
            datos: '',
            curso: '',
            asignaturas: [],

        }

        this.accederDom()
        this.definirManejadores()
        this.ponerFecha()

    }





    accederDom() {
        this.domFormulario = document.querySelector('#form1')
        this.domInpEmail = document.querySelector('#correo')
        this.domInpPasswd = document.querySelector('#password')
        this.domInpPasswd2 = document.querySelector('#password2')
        this.domRadioCurso = document.querySelectorAll('[name="curso"]') 
        this.domFieldAcademic = document.querySelector('#academic')
        //this.domSelectCurso = document.querySelector('#curso')
        this.domSelectTopics = document.querySelector('#topics')
        this.domDivTopics = document.querySelector('#div_topics')
        this.domDivResultados = document.querySelector('#resultados')
        this.donBtnReset = document.querySelector('#reset')
        this.domInpNombre = document.querySelector('#nombre')
        this.domInpApellido = document.querySelector('#apellido')
        this.domInpApellido2 = document.querySelector('#apellido2')
        this.domInpDia = document.querySelector('#dia')
        this.domInpMes = document.querySelector('#mes')
        this.domInpAño = document.querySelector('#año')
        this.domDivAfi = document.querySelector('#afi')
        this.domDivAfi2 = document.querySelector('#afi2')
        //this.domInpFecha = document.querySelector('#fecha')
        this.domTiempo = document.querySelector('#tiempo')

    }

    definirManejadores() {
        this.domFormulario.addEventListener('submit', this.enviar.bind(this))
        //this.domSelectCurso.addEventListener('change', this.presentarAsignaturas.bind(this))
    }




    enviar(ev) {
        console.log(ev)
        ev.preventDefault()
        this.recogerDatos()
        this.comprobarPasswd()
        this.presentarDatos()

    }

    comprobarPasswd() {
        console.log('Estoy pass')
        if (this.domInpPasswd.value !== this.domInpPasswd2.value) {
            alert('Los passwords no coinciden')
            console.log('Estoy aqui')
        }
    }

    ponerFecha() {
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        let f = new Date();
        this.domTiempo.innerHTML = ` Estamos a ${f.getDate()} de ${meses[f.getMonth()]} de ${f.getFullYear()} y es un buen dia para hacer un examen`
    }

    completar() {
        this.domFieldAcademic.classList.toggle('ocultar')
        if (this.domFieldAcademic.classList.contains('ocultar')) {
            this.domRadioCurso[0].checked = true
            this.domSelectCurso.selectedIndex = 0
        }
    }


    recogerDatos() {
        this.datos.email = this.domInpEmail.value
        this.datos.passwd = this.domInpPasswd.value
        this.datos.curso = this.procesarRadio(this.domRadioCurso)
        //this.datos.curso = this.procesarRadio(this.domSelectCurso)
        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.apellido = this.domInpApellido2.value
        this.datos.dia = new Date(this.domInpDia.value)
        this.datos.mes = new Date(this.domInpMes.value)
        this.datos.año = new Date(this.domInpAño.value)
        //this.datos.tiempo = new Date(this.domInpTiempo.value)

    }

    procesarSelect(nodo) {
        let index = nodo.selectedIndex
        return {
            code: nodo.options[index].value,
            text: nodo.options[index].textContent
        }
    }

    procesarRadio(nodo) {

        let value
        nodo.forEach((item) => {
            if (item.checked) {
                value = item.value
            }
        })
        return value
    }

    

    /*   presentarAsignaturas(ev) {
          //ev.target.firstElementChild.classList.add('ocultar')
          let topics = CURSOS[ev.target.selectedIndex - 1].asignaturas
          let HTMLResult = ''
          topics.forEach(elem => HTMLResult += `<option>${elem}</option>`)
          this.domDivTopics.classList.remove('ocultar')
          this.domSelectTopics.innerHTML = HTMLResult
      } */

    presentarDatos() {
        let resultadoHTML =
            `<h2>Resultados</h2>
        <ul>
        <li>email: ${this.datos.email}</li>
        <li>Contraseña: ${this.datos.passwd}</li>
        <li>Asignaturas: ${CURSOS[this.seleccionarIndexCurso()].asignaturas}</li>
        <li>Curso: ${this.datos.curso}</li>
        <li>Nombre: ${this.datos.nombre}</li>
        <li>Apellido: ${this.datos.apellido}</li>
        <li>Apellido2: ${this.datos.apellido2}</li>
        <li>Fecha de nacimiento: ${this.datos.dia}</li>
        <li>Fecha de nacimiento: ${this.datos.mes}</li>
        <li>Fecha de nacimiento: ${this.datos.año}</li>
        
        </ul>
        `
        /* <li>Aficiones: ${this.domAfi.value}</li>
        <li>Aficiones: ${this.domAfi2.value}</li> */
        this.domDivResultados.innerHTML = resultadoHTML
        console.dir(this.datos)

    }


    seleccionarIndexCurso() {
        let index;
        for (let i = 0; i < CURSOS.length; i++) {
            if (this.datos.curso.text === CURSOS[i].titulo) {
                index = i
                break
            }
        }
        console.log(index)
        return index
    }





}