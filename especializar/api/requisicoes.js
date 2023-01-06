//parametros na requisição são formas de passar para dentro do codigo informações que não estavam lá antes

const express = require('express');
const app = express();

app.listen('3000')

//middleware
app.use(express.json())


// app.route('/').get((req, res) => res.send(req.body.author))

app.route('/').post((req, res) =>{
    const {nome, series_favoritas} = req.body
    res.send(`meu nome é ${nome} e minhas series favoritas são ${series_favoritas}`)
})

app.route('/').get((req, res) => res.send("oi"))
app.route('/:variavel').get((req, res) => res.send(req.params.variavel))
app.route('/identidade/:variavel').get((req, res) => res.send(req.params.variavel))


app.route('/').get((req, res) => res.send(req.query.name))
app.route('/about/user').get((req, res) => res.send(req.query))