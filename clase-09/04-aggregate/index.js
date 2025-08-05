import mongoose from "mongoose";
import { orderModel } from "./models/order.model.js";

mongoose.connect("mongodb://localhost:27017/pizzaDB")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Connection error", err));

async function getOrders() {
    let orders = await orderModel.aggregate([
        {
            $match: {
                size: "medium"
            }
        },
        {
            $group: {
                _id: "$name",
                totalQuantity: { $sum: "$quantity" },
            }
        },
        {
            $sort: {
                totalQuantity: -1
            }
        },
        {
            $group: {
                _id: 1,
                orders: { $push: "$$ROOT" }
            }
        },
        {
            $project: {
                _id: 0,
                orders: "$orders",
            }
        },
        {
            $merge: {
                into: "reports"
            }
        }
    ]);

    console.log("Orders with size medium:", JSON.stringify(orders, null, 2));
}

getOrders()