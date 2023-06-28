const moment = require('moment');

let fecha = moment().format(("dddd, MMMM Do YYYY"))

const celular = {
    modelo: 'android',
    wiFi: true,
    ram: '4 Gb',
    procesador: 'Intel QuadCore',
    redMovil: '4g',
    fecha: `${fecha}`
}

module.exports = celular

let copiaCelular = {...celular, wiFi: false, redMovil: '3g'}

console.log(copiaCelular);

console.log(Object.values(copiaCelular).find(e => e == '3g'))