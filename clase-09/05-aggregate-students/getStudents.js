import mongoose from "mongoose";
import { studentModel } from "./models/student.model.js";

mongoose.connect("mongodb://localhost:27017/studentsDB")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Connection error", err));

async function getStudentsBy() {
    // estudiantes agrupados por grade del mejor al peor
    let students = await studentModel.aggregate([
        {
            $group: {
                _id: "$grade",
                students: { $push: "$$ROOT" }
            }
        },
        {
            $sort: {
                _id: -1 // ordenar de mayor a menor
            }
        },
        {
            $project: {
                _id: 0,
                grade: "$_id",
                students: 1
            }
        }
    ]);

    console.log("Students grouped by grade:", JSON.stringify(students, null, 2));

    // estudiantes agrupados por group

    let studentsByGroup = await studentModel.aggregate([
        {
            $group: {
                _id: "$group",
                students: { $push: "$$ROOT" }
            }
        },
        {
            $sort: {
                _id: 1
            }
        },
        {
            $project: {
                _id: 0,
                group: "$_id",
                students: 1
            }
        }
    ]);

    console.log("Students grouped by group:", JSON.stringify(studentsByGroup, null, 2));

    // obtener el promedio de los estudiantes de group 1B
    let averageGrade = await studentModel.aggregate([
        {
            $match: {
                group: "1B"
            }
        },
        {
            $group: {
                _id: null,
                averageGrade: { $avg: "$grade" }
            }
        },
        {
            $project: {
                _id: 0,
                averageGrade: 1
            }
        }
    ]);

    console.log("Average grade for group 1B:", averageGrade[0].averageGrade);

    // promedio de los estudiantes de cada grupo
    let averageGradeByGroup = await studentModel.aggregate([
        {
            $group: {
                _id: "$group",
                averageGrade: { $avg: "$grade" }
            }
        },
        {
            $sort: {
                _id: 1
            }
        },
        {
            $project: {
                _id: 0,
                group: "$_id",
                averageGrade: 1
            }
        }
    ]);

    console.log("Average grade by group:", JSON.stringify(averageGradeByGroup, null, 2));

    // obtener el promedrio general de los estudiantes
    let overallAverageGrade = await studentModel.aggregate([
        {
            $group: {
                _id: null,
                averageGrade: { $avg: "$grade" }
            }
        },
        {
            $project: {
                _id: 0,
                averageGrade: 1
            }
        }
    ]);

    console.log("Overall average grade:", overallAverageGrade[0].averageGrade);

    // promedio de los estudiantes por genero
    let averageGradeByGender = await studentModel.aggregate([
        {
            $group: {
                _id: "$gender",
                averageGrade: { $avg: "$grade" }
            }
        },
        {
            $sort: {
                _id: 1
            }
        },
        {
            $project: {
                _id: 0,
                gender: "$_id",
                averageGrade: 1
            }
        }
    ]);

    console.log("Average grade by gender:", JSON.stringify(averageGradeByGender, null, 2));

}

getStudentsBy()