/* Prototype

    *prototype-based language
    *prototype chain
    *__proto__

antes do objeto ser criado, existe diversos prototypes que constroem esse objeto 
fica encapsulado e o objeto herda
JS é uma linguagem basead em prototipos
*/

//type conversion vs type coersion
//type conversion altera o tipo de dado de um para outro
//type coersion é quando o JS faz essa troca implicitamente 

console.log('9' + 5) //retorna 95 > coersion
console.log(Number('9') + 5) //retorna 14 > conversion

//numero em string e string em numero
let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))

//contar quantos caracteres tem uma palavra e quantos digitos tem um numero
let word = "palavra"
console.log(word.length)

let number1 = 1234
console.log(String(number1).length)

//transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula
let number2 = 455.73826486
console.log(number.toFixed(2).replace(".", ","))

//transformar minusculas em maiusculas e o contrario tambem
let word1 = "PrOgRaMaR é MuItO bAcAnA"
console.log(word1.toLocaleLowerCase(), word1.toUpperCase())

//separar um texto que contem espaços, em um novo array onde cada texto é uma posição de 
//array. depois disso, transforme o array em um texto e onde eram espaços, colocar _
let phrase = "amanha eu boto a perna no mundo"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phrase, myArray, phraseWithUnderscore)

//verificar se o texto contem uma palavra > retorna boolean
let phrase1 = "com a perna no mundo"
console.log(phrase.includes("mundo")) 
console.log(phrase.includes("amor"))

//criar array com constructor
let myArray1 = new Array('a', 'b', 'c')
console.log(myArray1)

//contar elementos de um array
console.log([
    "a",
    {type: "array"},
    function() {return "alo"}.length,
])

//transformando strings em arrays
let word2 = "manipulação"
console.log(Array.from(word2))

//manipulando arrays

let techs = ["html", "css", "js"]

//adicionar um item no fim
console.log(techs.push("nodejs"))
//adicionar no começo
techs.unshift("sql")
//remover do fim
techs.pop()
//remover do começo
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1, 3)) //retira o html
//remover 1 ou mais itens e qualquer posição do array
console.log(techs.splice(1, 3)) //retorna somente html
//encontrar a posição de um elemento do array
let index = techs.indexOf() //pode passar o parametro dentro da função
techs.splice(index, 1) //remove a posição que foi encontrada


console.log(techs)