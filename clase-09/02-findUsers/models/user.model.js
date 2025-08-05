import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        index: true
    },
    apellido: String,
    email: String,
    dni: Number,
    genero: String,
    clase: String,
    edad: Number
});

export const userModel = mongoose.model(userCollection, userSchema);