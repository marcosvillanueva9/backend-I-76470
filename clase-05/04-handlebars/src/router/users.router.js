import { Router } from "express";

const users = [
  { nombre: "Marcos", email: "marcos@example.com" },
  { nombre: "Ana", email: "ana@example.com" },
  { nombre: "Luis", email: "luis@example.com" },
  { nombre: "Laura", email: "laura@example.com" },
  { nombre: "Pedro", email: "pedro@example.com" },
  { nombre: "Sofia", email: "sofia@example.com" }
]

const router = Router()

router.get('/', (req, res) => {
    res.render('index', { 
        title: 'Usuarios creados actualmente', 
        users,
        titulodetabla: 'NOMBRES DE USUARIO'
    })
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/', (req, res) => {
    const user = req.body
    users.push(user)

    res.json('usuario almacenado correctamente')
})

export default router;
