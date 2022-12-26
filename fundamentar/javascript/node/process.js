console.log(process)

console.log(process.argv) //lista de argumentos que estou rodando no node

const firstName = process.argv[2]
const lastName = process.argv[3]
console.log(`meu nome é ${firstName} ${lastName}`)

