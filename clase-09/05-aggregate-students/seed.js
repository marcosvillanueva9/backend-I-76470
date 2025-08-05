import mongoose from "mongoose";
import { studentModel } from "./models/student.model.js";

const nombresHombre = ["Marcos", "Juan", "Carlos", "Pedro", "Luis", "Diego", "Matias", "Facundo", "Ezequiel", "Andres", "Javier", "Santiago", "Nicolas", "Gabriel", "Alejandro", "David", "Fernando", "Cristian", "Joaquín", "Tomas"];
const nombresMujer  = ["Lucía", "Ana", "Sofía", "María", "Camila", "Julieta", "Valentina", "Martina", "Florencia", "Carla", "Isabella", "Victoria", "Renata", "Agustina", "Elena", "Paula", "Gabriela", "Clara", "Mia", "Lola"];
const apellidos = ["Villanueva", "Gómez", "Pérez", "Fernández", "Rodríguez", "López", "Martínez", "Díaz", "Sánchez", "Romero", "Torres", "Ramírez", "Flores", "Gutiérrez", "Morales", "Rivera", "Cruz", "Reyes", "Ortiz", "Castro"];
const generos = ["H", "M"];
const grupo = ["1A", "1B", "2A", "2B", "3A", "3B"];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

async function seed() {
    await mongoose.connect("mongodb://localhost:27017/studentsDB");

    await studentModel.deleteMany({});

    // generar 2000 estudiantes aleatorios
    const students = Array.from({ length: 2000 }, () => {
        const gender = getRandomItem(generos);
        return {
            gender,
            first_name: gender === "H" ? getRandomItem(nombresHombre) : getRandomItem(nombresMujer),
            last_name: getRandomItem(apellidos),
            email: `${getRandomItem([...nombresHombre, ...nombresMujer]).toLowerCase()}@gmail.com`,
            group: getRandomItem(grupo),
            grade: Math.floor(Math.random() * 10) + 1
        };
    });

    await studentModel.insertMany(students);
    console.log("Database seeded with students");

    await mongoose.disconnect();
}

seed();