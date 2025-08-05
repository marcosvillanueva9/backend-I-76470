import mongoose from "mongoose";
import { userModel } from "./models/user.model.js";

mongoose.connect("mongodb://localhost:27017/usersDB")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Connection error", err));

async function findUsers() {
    let response = await userModel.find({nombre: "Marcos"}).explain("executionStats");
    console.log(response);
}

findUsers();