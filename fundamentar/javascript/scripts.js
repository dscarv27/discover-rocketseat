//expressões > utilizar ponto e virgula ao final das expressoes
//mesmo que não seja obrigatorio, pode atrapalhar a execução de funções
//facilita a leitura do codigo


//expressoes
// let number = 1

// (function (){
//     console.log('alo')
// })() //retorna erro de tipo

//operadores
let number = 1;

//binary
console.log(number + 1)

//unary
console.log(--number)
console.log(typeof number)

//ternary
console.log(true ? 'alo' : 'nada')

//new > cria novos objetos
let name = new String('Daniel')
name.surName = "Carvalho"
let age = new Number(30)
console.log(name.surName, age)

let date = new Date()
console.log(date)

//delete > deletando propriedades
const person = {
    nome: 'Daniel',
    age: 30
}
delete person.age

console.log(person)

//operadores aritimeticos
//multiplicação *
console.log(3.2 * 5.5)
//divisão /
console.log(70 / 5)
//soma +
console.log(7 + 9)
//subtraçao -
console.log(90 - 67)
//resto da divisão %
let remainder
remainder = 11 % 9
console.log(remainder)
//incremento ++
let increment = 0
console.log(++increment) //retorna 1
console.log(increment++) //retorna 1
//decremento --
let decrement = 0
console.log(--decrement) //retorna -1
console.log(decrement--) //retorna -1
//exponencial **
console.log(3 ** 3) //3 elevado a 3 = retorna 27

//grouping operator ()
let total = 2 + 3 * 5
console.log(total) //retorna 17.

let total1 = (2 + 3) * 5
console.log(total1) //retorna 25.

//operadores de comparação > compara valores e retorna um boolean como resposta
let one = 1
let two = 2

//== igual a 
console.log(two == 1) //retorna false
console.log(one == 1) //retorna true

//!= diferente de 
console.log(one != two) //retorna true
console.log(one != 1) //retorna false
console.log(one != "1") //retorna true

//=== estritamente igual a (compara tipos e valores)
console.log(one === "1") //retorna false
console.log(one === 1) //retorna true

//!== estritamente diferente de (compara tipos e valores)
console.log(two !== "2") //retorna true
console.log(two !== 2) //retorna false

//operadores de atribuição(assignment)
let x

//assignment 
x = 1
console.log(x)

//addition assignment
x += 2
console.log(x)

//subtraction assignment
x -= 1
console.log(x)

//multiplication assignment
x *= 2
console.log(x)

//division assignment
x /= 2
console.log(x)

//remainder, exponetiation
x %= 2
x **= 2
console.log(x)

//operadores lógicos (logical operators) > booleans
let pao = true
let queijo = false

//and &&
console.log(pao && queijo)

//or ||
console.log(pao || queijo)

//not ! > troca de valor
console.log(!pao)
console.log(!queijo)

//ternário
let cafe = true
let leite = true

const niceBreakfast = cafe && leite ? 'bom cafe' : 'cafe ruim'

console.log(niceBreakfast)

let newAge = 16
const canDrive = newAge >=18 ? 'can drive' : "can't drive"
console.log(canDrive)

//string operator
//comparison
console.log('a' == 'a')

//concatenation > uniao de duas strings
let alpha = 'alpha'
console.log(alpha + 'bet' + 's')
console.log(alpha+345) //transforma o number em string

/*
    FALSY
    quando um valor é considerado false em contextos onde um 
    booleano é obrigatorio (condicionais e loops)

    false, 0, -0, "", null, undefined, NaN
*/ console.log( NaN ? 'verdadeiro' : 'falso')

/*
    TRUTHY
    quando um valor é considerado true em contextos onde um
    booleano é obrigatório (condicionais e loops)

    true, {}, [], 1, 3.23, "0", "false", -1, Infinity, -Infinity
*/ console.log( "false" ? 'verdadeiro' : 'falso' )

//precedencia dos operadores
//grouping ( ), negação e incremento ! ++ --, multiplicação e divisão * /,
//adição e subtração + -, relacional < <= > >=c, igualdade == != === !==,
//AND &&, OR ||, condicional ?:, atribuição = += -+ *=
//"por baixo dos panos", false = 0 e true = 1
console.log(3 > 2 > 1) //retorna false
console.log(3 > 2 == 1) //retorna true