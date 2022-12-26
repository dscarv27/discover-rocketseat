//declaração or declaration e atribuição or assignment de valores
var name = "Daniel"

//que tipo de dado foi colocado na variável
console.log(typeof name)

//agrupamento de declarações
let age, isHuman

age = 30
isHuman = true
console.log(name, age, isHuman) //multiplos argumentos na funçao

//escrita de texto + variáveis
console.log('o ' + name + ' tem ' + age + ' anos.')

//interpolando valores com template literals or template strings
console.log(`o ${name} tem ${age} anos.`)

//Object

const person = {
    name: 'Daniel',
    age: 30,
    weight: 70.3,
    isAdmin: true
}
console.log(person.name, person.age, person.weight, person.isAdmin)

//Array
const animals = [
    'Lion', 
    'Monkey', 
    {
        name: 'Cat',
        age: 4
    }
]
//acessar valores dentro do array
console.log(animals[0], animals[1], animals[2], animals.length)
console.log(animals[2].name, animals[2].age,)