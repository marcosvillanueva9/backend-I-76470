import mongoose from 'mongoose';

const estudiantesCollection = 'estudiantes';

const estudiantesSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    dni: {
        type: String,
        unique: true,
        required: true
    },
    curso: String,
    nota: Number
});

const estudiantesModel = mongoose.model(estudiantesCollection, estudiantesSchema);

export default estudiantesModel;