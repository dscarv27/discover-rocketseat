//setTimeout roda uma função depois de X milissegundos

const timeOut = 3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut) //a função finished é uma função callback
console.log('Mostrar') //o mostrar aparece primeiro, representando uma função assincrona e o eventloop