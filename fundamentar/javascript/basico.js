//sintaxe
//importante escrever com a sintaxe correta e notar os erros apontados pelo vscode
console.log("Bem vindo ao Starter")

//tipos de dados
//strings > cadeia de caracteres ("", '', ``)
console.log(`Daniel ${1+1}`) //interpolação
console.log(1+1)

//number > identificadores de numeros 
//inteiros (33), reais/float (12.5), NaN (not a number), Infinity (infinito)
console.log(87 / "leinad")
console.log(409 === Infinity)

//boolean
//verdadeiro ou falso

//undefined vs null
//indefinido (não existe) vs nulo (objeto que não possui nada dentro)
console.log(undefined === null)

//object
//objeto, propriedades/atributos, funcionalidades/métodos
console.log({
    name: "Daniel",
    age: 30,
    andar: function(){
        console.log('pode andar!')
    }
})

//array(vetores)
//agrupamentos de dados
console.log(["leite", "ovos", "pao", 2, 5])

//Conforme o ECMAScript Standard (o padrão do orgão que padroniza o JavaScript) temos 9 tipos de dados organizados em 4 categorias: Primitive, Primitive Value, Structural e Structural
//Primitive. Os primitivos são: String, Number, Boolean, Undefined, Symbol, BigInt. Os estruturais são: Object e Function. 
//Além destes, temos o primitivo estrutural que consiste apenas no dado null
//todo object tem alguma funcionalidade