//variaveis ficam na memoria do computador, que recebem tipos de dados
//no javascript, não precisa tipar a variavel. para saber o tipo da varial, colocar typeof no console.log, porém não imprime o valor
var clima = "quente"
clima = "frio" //variando o valor da variavel

let mes = "outubro"
mes = 32

const ano = 2022 //const não pode ser alterada

console.log(clima)
console.log(mes)
console.log(typeof ano)

//scope var > determina a visibilidade de alguma variavel no JS
//var é global e também local
//hoisting (elevação): o JS joga o var x pra antes das {} e deixa x = 0 dentro das {}
console.log('existe x antes do bloco? ', x) //retorna undefined

{
    var x = 0
} 

console.log('existe x depois do bloco? ', x) //retorna o 0

//scope let e const
//const e let são locais, só funcionam no scope em que foram criadas

console.log('existe y antes do bloco? ', y) //erro de referencia

{
    let y = 0
    console.log('existe y antes do bloco? ', y) //retorna valor de y

}

console.log('existe x depois do bloco? ', y) //erro de referencia