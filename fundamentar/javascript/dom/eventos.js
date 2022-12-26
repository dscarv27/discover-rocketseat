//eventos

function print(){
    console.log(print)
}

const input = document.querySelector('input')

input.onkeydown = function(){
    console.log('rodei')
}

input.onkeyup = function(){
    console.log('soltei')
}

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print(){
    console.log('print')
}

h1.addEventListener('click', function(){
    console.log('outro momento')
})

//argumento event

input.onkeydown = function(event){
    console.log(event.key)
    console.log(event.currentTarget.value)
}