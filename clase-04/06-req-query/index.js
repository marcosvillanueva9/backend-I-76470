import express from 'express';

const app = express()

const usuarios = [
    { id: "1", nombre: "marcos", apellido: "villanueva", edad: 26, genero: "m" },
    { id: "2", nombre: "jorge", apellido: "leporace", edad: 27, genero: "m" },
    { id: "3", nombre: "eugenio", apellido: "borras", edad: 31, genero: "m" },
    { id: "4", nombre: "alex", apellido: "gonzales", edad: 42, genero: "m" },
    { id: "5", nombre: "juliana", apellido: "schneider", edad: 38, genero: "f" },
];

app.get('/usuarios', (req, res) => {
    const { genero } = req.query
    
    let usuariosFiltrados = usuarios
    if (genero) {
        usuariosFiltrados = usuarios.filter(u => u.genero === genero)
    }
    
    res.json(usuariosFiltrados);
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