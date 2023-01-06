const express = require('express') //chamando o módulo e guardando na constante

const app = express() //inicializando a constante

app.listen('3000') //passa a ouvir a porta

app.route('/').get((req, res) => res.send("hello world"))
app.route('/sobre').get((req, res) => res.send("hello world na rota sobre"))


//middleware > ponte entre as requisições
app.use(express.json())

app.route('/').post((req, res) => res.send(req.body))

let author = "Daniel"

app.route('/').put((req, res) => {
    author = req.body.author
    res.send(author)
})

app.route('/:id').delete((req, res) => {
    // author = ""
    res.send(req.params.id)
})