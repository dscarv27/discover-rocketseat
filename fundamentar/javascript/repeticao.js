//for
//break > para a execução do looping
//continue > pula a execução do momento

for(let i = 0; i <= 10; i++){
    console.log(i)
}

for(let i = 20; i >= 0; i--){
    console.log(i)
}

for(let i = 100; i > 0; i--){
    if(i === 85){
        break;
    }
    console.log(i)
}

for(let i = 10; i > 0; i--){
    if(i === 5){
        continue;
    }
    console.log(i) //ignora o 5 e continua o looping
}

//while > enquanto
//utilizar quando não sabe qual é o momento da parada do looping
let i = 4976785789
while(i > 10){
    console.log(i)

    i /= 35;
}

//for...of > cria um looping atraves de uma variavel ja existente
let nome = 'Daniel'
let names = ['João', 'Paulo', 'Pedro']

for(let char of nome){
    console.log(char)
} //retorna cada letra da string

for(let nome of names){
    console.log(nome)
} //retorna os nomes da variavel names

//for...in > cria um looping em cima de um objeto, pegando as suas propriedades
let person = {
    nome: 'daniel', 
    idade: 30,
    peso: 70.1,
}

for(let property in person){
    console.log(property)
    console.log(person.nome)
    console.log(person[property])
}