const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

//a indexação (index) começa pelo número 0
console.log(pilotos[0]) //Senna
console.log(pilotos[3]) //Hamilton

//acessar o tamanho do array
console.log(pilotos.length) //4

//interável
for (let piloto of pilotos){
    console.log(piloto)
} //todos os pilotos

//adicionar elemento
pilotos.push('Alonso')
console.log(pilotos) //add alonso no final do array

//encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna) //apesar de funcionar, pode não ser muito eficiente em listas grandes

//deletar um elemento
pilotos.splice(1, 1)
console.log(pilotos) //apesar de funcionar, pode não ser muito eficiente em listas grandes