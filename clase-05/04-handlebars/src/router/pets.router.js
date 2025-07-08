import { Router } from "express";
import uploader from "../utils/multer.js";

const pets = []

const router = Router()

router.get('/', (req, res) => {
    res.json(pets)
})

router.post('/', uploader.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'Archivo no subido' })
    }

    const pet = req.body
    pet.file = req.file.path
    pets.push(pet)

    res.json('mascota almacenada correctamente')
})

export default router;
