import express from 'express';

const app = express()

const usuarios = [
    { id: "1", nombre: "marcos", apellido: "villanueva", edad: 26 },
    { id: "2", nombre: "jorge", apellido: "leporace", edad: 27 },
    { id: "3", nombre: "eugenio", apellido: "borras", edad: 31 },
    { id: "4", nombre: "alex", apellido: "gonzales", edad: 42 },
    { id: "5", nombre: "pablo", apellido: "pollo", edad: 20 },
];

app.get('/usuarios', (req, res) => {
    console.log(req.params)
    res.json(usuarios);
})

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id

    const usuario = usuarios.find(u => u.id === id)

    if (!usuario) {
        res.status(404).json({error: 'usuario no encontrado'})
    } else {
        res.json(usuario);
    }
})

app.listen(8080, () => {
    console.log('Mi primer servidor esta escuchando en el 8080')
})