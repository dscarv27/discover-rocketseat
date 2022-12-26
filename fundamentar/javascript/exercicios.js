/*
Transformar notas escolares
criar um algoritmo que transforma as notas do sistema numerico
para sistema de notas em caracteres tipo A B C D F

de 90 para cima - A
entre 80~89 - B
entre 70~79 - C
entre 60~69 - D
menor que 60 - F

*/
function getScore(score){
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB){
        scoreFinal = "B"
    } else if (scoreC){
        scoreFinal = "C"
    } else if (scoreD){
        scoreFinal = "D"
    } else if (scoreF){
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }
    return scoreFinal;
}

console.log(getScore(101), getScore(-1), 
getScore(0), getScore(45), getScore(67), 
getScore(73), getScore(82),getScore(97))

/*
Sistema de gastos familiar
criar um objeto que possuirá 2 propriedades, ambas do tipo array:
    *receitas: [], despesas: []
Depois, criar uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a familía está com saldo
positivo ou negativo, seguido do valor do saldo
*/

let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00, 5200]
}

function sum(array){
    let total = 0

    for(let value of array){
        total += value
    }

    return total
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total1 = calculateIncomes - calculateExpenses
    const itsOk = total1 >= 0

    let balanceText = "negativo"

    if(itsOk){
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total1.toFixed(2)}R$`)
}

calculateBalance()

/*
Celsius em Fahrenheit
criar uma função que recebe uma string em celsius ou fahrenheit 
e fazer a transformação de euma unidade para outra

C = (F - 32) *5/9
F = C * 9/5 + 32
*/

function transformDegrees(degrees){
    const celsiusExists = degrees.toUpperCase().includes("C")
    const fahrenheitExists = degrees.toUpperCase().includes("F")

    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error("O grau não foi encontrado")
    }

    //fluxo ideal, F > C
    let updatedDegrees = Number(degrees.toUpperCase().replace("F", ""))
    let formattedDegrees = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreesSign = 'C'

    //fluxo alternativo, C > F
    if(celsiusExists){
        updatedDegrees = Number(degrees.toUpperCase().replace("C", ""))
        formattedDegrees = (celsius) => celsius * 9/5 + 32
        degreesSign = 'F'
    }

    return formattedDegrees(updatedDegrees) + degreesSign
}
try {
    console.log(transformDegrees('50F'))
    console.log(transformDegrees('10C'))
    transformDegrees('50V')
} catch (e) {

    console.log(e.message)
}

/*
Buscando e contando dados em Arrays 
baseado no array de livros abaixo, fazer os desafios:
    contar o numero de categorias e o numero de livros em cada categoria
    contar o numero de autores
    mostrar os livros de augusto cury
    transformar a funçao acima em uma funçao que irá receber o nome do autor
    e devolver os livros desse autor
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é insubstituível", 
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }
        ],
    }
];

const totalCategories = booksByCategory.length;

console.log(`Total de categorias: ${totalCategories}`)

for(let category of booksByCategory) {
    console.log('Total de livros das categorias: ', category.category);
    console.log('Total de categorias: ', category.books.length);
}

function countAuthors(){
    let authors = [];
    
    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
            authors.push(book.author);
            }
        }
    }
    console.log("Total de autores: ", authors.length);
}

countAuthors();

function booksOfAugustoCury(){
    let books = [];
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author == "Augusto Cury"){
                books.push(book.title);
            }
        }
    } 
    console.log("Livros do autor Augusto Cury: ", books);
}

booksOfAugustoCury();

function booksOfAuthor(author){
    let books = [];
    
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author == author){
                books.push(book.title);
            }
        }
    }
    console.log(`Livros do autor ${author}: "${books.join(", ")}"`);
}

booksOfAuthor('Augusto Cury');
booksOfAuthor('T. Harv Eker');
booksOfAuthor('George S. Clason');
booksOfAuthor('Robert T. Kiyosaki e Sharon L. Lechter');
booksOfAuthor('Stephen R. Covey');