import express from 'express';

const app = express()

const users = [{ nombre: "marcos"}, {nombre: "pablo"}]

app.get('/saludo', (req, res) => {
    res.status(200).send('<h1>Hola a todos</h1>')
})

app.get('/usuarios', (req, res) => {
    res.status(200).send(users)
})

app.listen(8080, () => {
    console.log('Mi primer servidor esta escuchando en el 8080')
})