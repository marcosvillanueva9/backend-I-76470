import { Router } from "express";

const users = []

const router = Router()

router.get('/', (req, res) => {
    res.json(users)
})

router.post('/', (req, res) => {
    const user = req.body
    users.push(user)

    res.json('usuario almacenado correctamente')
})

export default router;
