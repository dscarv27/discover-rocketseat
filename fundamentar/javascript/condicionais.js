//control flow (controle de fluxo)

//if...else

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('febre alta')
} else if(mediumTemperature){
    console.log('febre moderada')
} else {
    console.log('saudável')
}

//switch
let expression = 'a'

switch (expression){
    case 'a':
        //codigo
        console.log('a')
        break //impede que a função continue retornando após encontrar o resultado
    case 'b':
        //codigo expression b
        console.log('b')
        break
    default:
        console.log('default')
        break
}

function calculate(number1, operator, number2){
    let result

    switch (operator){
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '%', 8)) //retorna undefined

//throw > disparar, lançar
function sayMyName(name = ''){
    if(name === ''){
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

//try...catch
try{
    sayMyName('Daniel')
} catch(e){
    console.log(e)
}

console.log('após o try/catch')