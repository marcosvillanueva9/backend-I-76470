import mongoose from "mongoose";
import express from "express";
import handlebars from "express-handlebars";

import { studentModel } from "./models/student.model.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");
app.set("views", "./views");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/studentsDB")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Connection error", err));

// crear una vista que muestre los estudiantes con paginacion
app.get("/students", async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
        // get con aggregate
        const students = await studentModel.aggregate([
            {
                $sort: { first_name: 1 } // ordenar por nombre
            },
            {
                $skip: (page - 1) * limit // saltar los primeros n documentos
            },
            {
                $limit: limit // limitar a n documentos
            }
        ]);

        const totalStudents = await studentModel.countDocuments();
        const totalPages = Math.ceil(totalStudents / limit);

        res.render("students", {
            students,
            currentPage: page,
            totalPages,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1
        });
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});