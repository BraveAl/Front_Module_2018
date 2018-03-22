
function Facturas (company_info = new CompanyInfo(), client_info = new ClientInfo(), elements = new Elements(), bills = new Bills())
{
    this.company_info = company_info,
    this.client_info = client_info,
    this.elements = elements,
    this.bills = bills,
    this.calcularFactura = function ()
    {
        this.bills.total = this.elements.price*this.elements.amount + this.elements.price*this.elements.amount*this.bills.IVA

    },
    this.printTotal = function()
    {
        console.log (this.bills.total)
    }

}

function CompanyInfo (name = '', address = '', phone = 0, NIF = '')
{
    this.name = name,
    this.address = address,
    this.phone = phone,
    this.NIF = NIF
}

function ClientInfo (name = '', address = '', phone = 0, DNI = '')
{
    this.name = name,
    this.address = address,
    this.phone = phone,
    this.DNI = DNI
}

function Bills (total = 0, IVA = 0.0, pay_method = '')
{
    this.total = total,
    this.IVA = IVA,
    this.pay_method = pay_method
}

function Elements(description = '', price = 0, amount = 0)
{
    this.description = description,
    this.price = price,
    this.amount = amount
}
