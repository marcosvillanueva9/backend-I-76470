import express from 'express';

const app = express()

const users = [{ nombre: "marcos"}, {nombre: "pablo"}]

app.get('/saludo', (req, res) => {
    res.status(200).send('<h1>Hola a todos</h1>')
})

app.get('/bienvenida', (req, res) => {
    res.status(200).send('<h1 style="color: blue;">Hola a todos</h1>')
})

app.get('/usuario', (req, res) => {
    const user = {
        nombre: "Jorge",
        apellido: "Leporace",
        edad: 48,
        correo: "jorgitoleporace@yahoo.com"
    }

    res.json(user)
})

app.listen(8080, () => {
    console.log('Mi primer servidor esta escuchando en el 8080')
})