//Asserção de tipo normalmente é utilizado quando o TypeScript não sabe qual é a tipagem em um determinado objeto.
//Para contornarmos isso, podemos criar um type informando quais são as propriedades desse objeto.
//muito utilizado para consumir API

type UserResponse = {
    id: number;
    name: string;
    avatar: string;
}

let userResponse = {} as UserResponse;
// userResponse. //agora vai aparecer os objetos