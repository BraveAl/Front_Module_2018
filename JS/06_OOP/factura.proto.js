function Empresa (params = {}) {
    this.nombre = params.nombre || ''
    this.direccion = params.direccion || ''
    this.telefono = params.telefono || ''
    this.NIF = params.NIF || ''
}

function Item (desc = '', precio = 0, cantidad = 0) {
        this.descripcion = desc
        this.precio = precio
        this.cantidad = cantidad
}

// Me llevo la funcion al prototipo, como si fuera un metodo de una clase
Factura.prototype.calcularTotal = function() {
        let totalSinIva = 0
        this.productos.forEach(
            item => totalSinIva += item.cantidad * item.precio 
        )     
        this.IVA = totalSinIva * this.tipoIVA
        this.total = totalSinIva + this.IVA
    }
// Igualmente me llevo la funcion addItem al prototipo de la funcion Factura
Factura.prototype.addItem = function(desc = '', precio = 0, cantidad = 0){ 
        this.productos.push(
            new Item(desc, precio, cantidad)
        )
    }
// Bsicamente es crear metodos
Factura.prototype.listarItems = function () {
        let r = ``
        this.productos.forEach(item => {
            r += `${item.descripcion} - ${item.cantidad} /  ${item.precio}€
            `
        });
        return r
    }

// Creamos metodos, que son prototipos
Factura.prototype.mostrar = function() {
        this.calcularTotal()
        return ` 
        -----------------------------
        ${this.nosotros.nombre}
        -----------------------------
            ${this.nosotros.direccion} 
            ${this.nosotros.telefono} 
            ${this.nosotros.NIF} 
        ---------------------------------------------------
                                ${this.cliente.nombre}
                                ${this.cliente.direccion}
                                ${this.cliente.NIF}
        ----------------------------------------------------
        ${this.listarItems()}
        -----------------------------------------------------
                                    Total Iva : ${this.IVA} €
                                    Total : ${this.total} €
                                    Forma de Pago : ${this.formaPago}
                    `
    }

// Ahora esta es la clase Factura, con el constructor --> Practicamente hemos separado constructor de metodos sin crear clase
function Factura(cliente = new Empresa(), 
                formaPago = '',
                tipoIVA = 0) {

    this.cliente = cliente
    this.productos = []
    this.formaPago = formaPago
    this.tipoIVA = tipoIVA
    this.total = 0
    this.IVA = 0
    
}

// Metod en el prototipo tambien variables comunes. Pasaria a ser una variable estatica (Static)
Factura.prototype.nosotros


let factura01 = new Factura (
    new Empresa({
        nombre : 'Ediciones Boracay',
        direccion : 'c/ Pez, 1',
        telefono : '343532423',
        NIF: 'B-4395873'}),
    new Empresa({
        nombre : 'Libros Guacamayo',
        direccion : 'c/ Olmos, 22',
        telefono : '343343069',
        NIF: 'B-9843973'}),
    'contado', 0.22
)

factura01.addItem('El Señor de....', 40, 20)
factura01.addItem('Neuromante', 35, 30)
factura01.addItem('Dracula', 35, 20)

console.log(factura01.mostrar())