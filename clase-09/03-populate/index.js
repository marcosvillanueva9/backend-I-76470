import mongoose from "mongoose";
import { courseModel } from "../03-populate/models/course.model.js";
import { studentModel } from "../03-populate/models/student.model.js";

mongoose.connect("mongodb://localhost:27017/schoolDB")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Connection error", err));

async function populate() {

    // crear un estudiante
    const student = {
        first_name: "Marcos",
        last_name: "Villanueva",
        email: "marcos.villanueva@example.com",
        gender: "Masculino",
        courses: []
    };

    const createdStudent = await studentModel.create(student);
    console.log("Estudiante creado:", createdStudent);

    // crear un curso
    const course = {
        title: "Introducción a Node.js",
        description: "Aprende los fundamentos de Node.js",
        difficulty: 3,
        topics: ["JavaScript", "Backend", "APIs"],
        professor: "Dr. Smith",
        students: []
    };

    const createdCourse = await courseModel.create(course);
    console.log("Curso creado:", createdCourse);

    // actualizar el estudiante para agregar el curso
    createdStudent.courses.push({ course: createdCourse._id });
    await createdStudent.save();
    console.log("Estudiante actualizado con el curso:", createdStudent);

    // get el estudiante con el curso poblado
    const populatedStudent = await studentModel.findById(createdStudent._id).populate("courses.course");
    console.log("Estudiante con curso poblado:", JSON.stringify(populatedStudent, null, 2));
}

populate();