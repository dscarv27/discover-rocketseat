//podemos unir dois tipos e usar as suas propriedades dentro de um objeto.

type User = {
    id: number,
    name: string,
}

type Char = {
    nickname: string,
    level: number
}

type PlayerInfo = User & Char;

let info: PlayerInfo = {
    id: 1,
    name: 'João Inácio',
    nickname: 'birobirobiro',
    level: 50
}