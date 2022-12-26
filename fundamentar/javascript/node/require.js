//modulos nativos
const path = require('path')

console.log(path.basename(__filename)) //nome base da localização do arquivo

//meus modulos
const myModule = require('./exports')

console.log(myModule)