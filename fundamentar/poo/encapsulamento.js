//estrutural
let altura = 50
let largura = 60

function calcularArea(){
    return altura * largura
}

let area = calcularArea()
console.log(area)

//orientado a objetos
class Poligono {
    constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea() //a # significa que não pode ser visto "lá fora"
    }

    #calcularArea(){
        return this.altura * this.largura
    }
}
//criando o objeto
let poligono = new Poligono(50, 60)
console.log(poligono, poligono.area) //imprimiu Poligono { altura: 50, largura: 60 } 3000