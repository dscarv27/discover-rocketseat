//todo objeto criado em JS é um prototipo e recebe uma herença de outras funcionalidades acima dele

//definir classe
class Pessoa{
    constructor(nome){
        this.id = ~~(Math.random() * 100000)
        this.nome = nome
    }

    dizerNome() {
        console.log(this.nome)
    }
}

//criar objeto
const pessoa = new Pessoa('daniel')
console.log(pessoa)  //imprimiu Pessoa { id: 25848, nome: 'daniel' }