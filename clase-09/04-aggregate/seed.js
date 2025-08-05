import mongoose from "mongoose";
import { orderModel } from "./models/order.model.js";

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

async function seed() {
    await mongoose.connect("mongodb://localhost:27017/pizzaDB");

    await orderModel.deleteMany({});

    const pizzaNames = ["Pepperoni", "Cheese", "Vegan", "Fugazza", "Margarita"];
    const sizes = ["small", "medium", "large"];

    // generar 100 ordenes aleatorias
    const orders = Array.from({ length: 100 }, () => ({
        name: getRandomItem(pizzaNames),
        size: getRandomItem(sizes),
        price: Math.floor(Math.random() * 20) + 5, // precio entre 5 y 25
        quantity: Math.floor(Math.random() * 5) + 1, // cantidad entre 1 y 5
        date: new Date()
    }));

    await orderModel.insertMany(orders);
    console.log("Database seeded with orders");

    await mongoose.disconnect();
}

seed();