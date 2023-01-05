//promise > a promessa de que algo irá acontecer. poderá dar certou ou errado, mas irá acontecer

let aceitar = false

console.log('pedi uber')
const promessa = new Promise((resolve, reject) => {

    if(aceitar){
        return resolve('carro chegou')
    }
    return reject('pedido declinado')
})

console.log('aguardando')

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('finalizada'))