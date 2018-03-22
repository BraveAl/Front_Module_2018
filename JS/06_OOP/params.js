function Point (param)
{
    this.x = param.x || 0, // Conviene poner el || en caso de que algo venga vacio (aqui no peta si falta algun campo)
    this.y = param.y || 1, // Conviene poner el || en caso de que algo venga vacio (aqui no peta si falta algun campo)
    this.r = param.r || 2, // Conviene poner el || en caso de que algo venga vacio (aqui no peta si falta algun campo)
    this.calcularCircunf = function (){},
    this.calcularCirculo = function(){}
}

new Point ({x:2, y:3, r:5}) // Pasa en un objeto los datos

