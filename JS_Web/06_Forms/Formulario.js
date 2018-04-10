export class Formulario // Exportamos la clase
{
    constructor()
        {
            this.datos = {
                nombre: '',
                apellido: '',
                email: '',
                passwd: '',
                isOk: false,
                notOk: false,
                turno: '',
                curso: '',
                datos: ''
            }
            this.accederDom()
            this.definirManejadores()
        }
    
        accederDom ()
        {
            this.domBtnSaludar = document.querySelector('#btnSaludar')
            this.domBtnEnviar = document.querySelector('#btnEnviar')
            this.domBtnReset = document.querySelector('#btnReset')
            this.domInpNombre = document.querySelector('#nombre')
            this.domInpApellido = document.querySelector('#apellido')
            this.domInpEmail = document.querySelector('#email')
            this.domInpPasswd = document.querySelector('#password')
            this.domAreaDatos = document.querySelector('#datos')
            this.domRadioTurno = document.querySelectorAll('[name="turno"]')
            //this.domRadioTurno = document.getElementsByName(turno) --> Version mas clasica pero mas clara, coges por nombre (radiobuttom)
            this.domCbxIsOk = document.querySelector('#isOk')
            this.domCbxNotOk = document.querySelector('#notOk')
            this.domSelectCurso = document.querySelector('#selcurso')
            this.domDivResultados = document.querySelector('#resultados')
            this.domFieldAcademic = document.querySelector('#academic')
           
        }

        definirManejadores()
        {
            this.domBtnSaludar.addEventListener('click', this.saludar.bind(this))
            this.domBtnEnviar.addEventListener('click', this.enviar.bind(this))
            this.domBtnReset.addEventListener('click', this.reset.bind(this))
            this.domCbxIsOk.addEventListener('change', this.habilitar.bind(this))
        }

        saludar()
        {
            console.log('Holaaaaaaa')
        }

        enviar(ev)
        {
            ev.preventDefault() // Evito que envie los datos
            this.recogerDatos()
            this.presentarDatos()
            //console.dir(this.datos)
        }

        // Habilita o deshabilita los datos academicos en funcion de aceptar o no la conformidad
        habilitar()
        {
            console.log('Estoy')
            //this.domFieldAcademic.disabled = !this.domFieldAcademic.disabled --> Usando el disabled
            this.domFieldAcademic.classList.toggle('ocultar') // Lo mismo que arriba pero en este caso solo aparece cuando apretamos al aceptar
            if(this.domFieldAcademic.classList.contains('ocultar'))
            {
                this.domSelectCurso.selectedIndex=0
                this.domRadioTurno[0].checked = true
            }
        }

        recogerDatos()
        {           
            this.datos.nombre = this.domInpNombre.value
            this.datos.apellido = this.domInpApellido.value
            this.datos.email = this.domInpEmail.value
            this.datos.passwd = this.domInpPasswd.value
            this.datos.datos = this.domAreaDatos.value
            this.datos.turno = this.procesarRadio(this.domRadioTurno) // Para todos los radiobuttom que pongamos nos lo para unos
            this.datos.isOk = this.domCbxIsOk.checked
            this.datos.notOk = this.domCbxNotOk.checked // ? 'YES' : 'NO'
            this.datos.curso = this.procesarSelect(this.domSelectCurso)  // Para todos los selectores que pongamos nos lo para unos
            
        }

        procesarSelect(nodo)
        {
            let index = nodo.selectedIndex
            let r = {
                code: nodo.options[index].value, // obtengo el valor
                text: nodo.options[index].text    // obtengo el texto
            } 

            return r
        }

        // Recorremos el array para ver que radio buttom esta activo
        procesarRadio(nodo)
        {
            let valor
            nodo.forEach((item) => {
                if (item.checked)
                {
                    valor = item.value
                }
                //console.log(item.checked, item.value)
            })

            return valor
        }

        presentarDatos()
        {
            let resultadoHTML = 
            `<h2> Resultados </h2>
            <ul>
                <li>Nombre: ${this.datos.nombre}</li>
                <li>Apellido: ${this.datos.apellido} </li>
                <li>e-mail: ${this.datos.email}</li>
                <li>Contraseña: ${this.datos.passwd}</li>
                <li>Aceptadas condiciones: ${this.datos.isOk ? 'Si':'No'}</li>
                <li>No aceptadas las condiciones: ${this.datos.notOk ? 'Si':'No'}</li>
                <li>Turno: ${this.datos.turno}</li>
                <li>Curso: ${this.datos.curso.text}</li>
                <li>Datos: ${this.datos.datos}</li>
            </ul>
            
            `
            
             
            this.domDivResultados.innerHTML = resultadoHTML
        }

        reset()
        {

        }
}