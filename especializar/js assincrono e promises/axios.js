import axios from "axios";

// axios.get('/users')
//   .then(res => {
//     console.log(res.data);
//   });

axios
    .get('https://api.github.com/users/dscarv27')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
.catch( error => console.log(error))

//executando promessas em paralelo

Promise.all([
    axios.get('https://api.github.com/users/dscarv27'),
    axios.get('https://api.github.com/users/dscarv27/repos')
])
.then(responses => {
    console.log(responses[0].data.login) //retorna o nome do usuario
    console.log(responses[1].data.length) //retorna a quantidade de repositorios
})
.catch( err => console.log(err.message))

//async-await
async function fetchRepos(){
    try {
        const user = await axios.get('https://api.github.com/users/dscarv27')
        const repos = await axios.get(user.data.repos_url)
        console.log(repos.data)
    } catch(e){
        console.log(e)
    }
}

fetchRepos()