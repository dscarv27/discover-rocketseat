//explica um pedaço de codigo, repete o codigo, executa uma operaçao

//function declaration, function statement
function createPhrases(){
    console.log('Estudar é muito bom')
    console.log('Paciência e resistência')
    console.log('Revisão é a mãe do aprendizado')
} //guardado em memória

//para executar a function
createPhrases()

console.log('fim do programa')

//dentro dos () são parameters
const sum = function(number1, number2){ //function expression, function anonymous
    total = (number1 + number2)
    return total //toda funçao precisa retornar algo
}

// sum(2, 4) //dentro dos (), são argumentos

let number1 = 34
let number2 = 25

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total) //NÃO criar variaveis sem declarar ela como var, let ou const

//a função é um liquidificador! mais exemplos abaixo:
//transforma o que está dentro dela
function fazerSuco(fruta1, fruta2){
    return 'suco de: ' + fruta1 + fruta2
}
const copo = fazerSuco('banana', 'maçã')
console.log(copo)

//function scope
let subject = 'create video' //com a função passando o parametro, retorna o valor da variavel
//se a função não passar parâmetro, a variavel sofre a alteração da função

// function createThink(subject){ 
    function createThink(){ 
    subject = 'study'
    return subject
}

console.log(createThink())
console.log(subject)

//function hoisting
sayMyName()

function sayMyName(){
    console.log('Daniel')
} //retorna a funçao declarada acima

//arrow function > maneira mais compactada, geralmente com const
const sayMyName1 = (name) => {{
    console.log(name)
}}

sayMyName1('Daniel')

//callback function > funçao que passa como parametro para outra funçao

function sayMyName2(name){
    console.log('bloco de codigo antes de executar a funçao')

    name()

    console.log('outro bloco de codigo depois de executar a funçao')
}

sayMyName2(
    () => {
        console.log('estou em uma callback')
    }
)

//function constructor
// expressao new, criar um novo objeto, this keyword

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}

const daniel = new Person('daniel')
const ulisses = new Person('ulisses')
console.log(daniel.walk(), ulisses.walk())