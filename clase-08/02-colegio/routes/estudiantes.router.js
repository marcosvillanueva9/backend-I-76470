import { Router } from 'express';
import estudiantesModel from '../models/estudiantes.model.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const estudiantes = await estudiantesModel.find();
        res.status(200).json(estudiantes);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving estudiantes', error });
    }
});

// completando el CRUP

router.post('/', async (req, res) => {
    try {
        const { nombre, apellido, edad, dni, curso, nota } = req.body;
        const newEstudiante = new estudiantesModel({ nombre, apellido, edad, dni, curso, nota });
        await newEstudiante.save();
        res.status(201).json(newEstudiante);
    } catch (error) {
        res.status(500).json({ message: 'Error creating estudiante', error });
    }
});

router.put('/:uid', async (req, res) => {
    try {
        const { uid } = req.params;
        const { nombre, apellido, edad, dni, curso, nota } = req.body;
        const estudiante = await estudiantesModel.findOne({ _id: uid });
        if (!estudiante) {
            return res.status(404).json({ message: 'Estudiante not found' });
        }
        if (nombre) estudiante.nombre = nombre;
        if (apellido) estudiante.apellido = apellido;
        if (edad) estudiante.edad = edad;
        if (dni) estudiante.dni = dni;
        if (curso) estudiante.curso = curso;
        if (nota) estudiante.nota = nota;
        await estudiante.save();
        res.status(200).json(estudiante);
    } catch (error) {
        res.status(500).json({ message: 'Error updating estudiante', error });
    }
});

router.delete('/:uid', async (req, res) => {
    try {
        const { uid } = req.params;
        const deletedEstudiante = await estudiantesModel.deleteOne({ _id: uid });
        if (deletedEstudiante.deletedCount > 0) {
            res.status(200).json({ message: 'Estudiante deleted successfully' });
        } else {
            res.status(404).json({ message: 'Estudiante not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting estudiante', error });
    }
});

export default router;