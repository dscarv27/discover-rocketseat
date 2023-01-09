const { default: axios } = require("axios")

const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data)
        })
        .catch(error => console.error(error))
}

function addNewUser(newUser){
    axios.post(url, newUser)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
}

function getUser(id){
    axios.get(`{url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated){

    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

deleteUser(id)

getUsers()
getUser(id)

const newUser = {
    name: "Leinad Carvalho",
    avatar: "https://picsum.photos/200/300",
    city: "Rio das Ostras"
}
addNewUser(newUser)

const userUpdated = {
    name: "Leinad Souza",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
}
updateUser(id, userUpdated)