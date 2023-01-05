const promessa = new Promise(function(resolve, reject){
    // return resolve('ok')
    return reject('erro')
})

promessa
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.log(error)
    })
.finally(function(){
    console.log('sempre irei executar')
})

//com fetch
async function start(){
    const url = "https://api.github.com/users/dscarv27"
    const user = await fetch(url).then(r => r.json())
    const userRepos = await fetch(user.repos_url).then(r => r.json());
    console.log(userRepos);
}

start().catch(e => console.log(e))