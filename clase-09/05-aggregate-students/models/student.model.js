import mongoose from "mongoose";

const studentCollection = "students";

const studentSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    group: String,
    grade: Number,
    gender: String
});

export const studentModel = mongoose.model(studentCollection, studentSchema);