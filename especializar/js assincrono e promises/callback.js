//Callback (chamar de volta) é uma função que é passada como argumento de outra função e depois de algum tempo ela é chamada de volta.

function imprimirDado(dado){
    console.log('outras tarefas')
    console.log(dado())
}

imprimirDado(function(){
    return 'Olá mundo!'
})

//setTimeout(function, delay)
setTimeout(function (){
    console.log('depois de 3s')
}, 3000)

//conectando API com HTTPS e callback
const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'
https.get(API, res =>{
    console.log(res.statusCode)
})
console.log('contectando API')