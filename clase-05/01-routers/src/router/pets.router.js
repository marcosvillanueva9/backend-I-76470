import { Router } from "express";

const pets = []

const router = Router()

router.get('/', (req, res) => {
    res.json(pets)
})

router.post('/', (req, res) => {
    const pet = req.body
    pets.push(pet)

    res.json('mascota almacenada correctamente')
})

export default router;
