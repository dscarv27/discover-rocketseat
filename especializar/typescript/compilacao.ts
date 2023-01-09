function showTicket(user: string | null, ticket: number){
    console.log(`Olá ${user ?? 'Usuário Padrão'}. Seu número de bilhete é ${ticket}`)
}

showTicket('Daniel Carvalho', 277)