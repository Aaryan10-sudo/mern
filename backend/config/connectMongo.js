import mongoose from "mongoose"

export const connectDB = async() => {
    try {
        const result = await mongoose.connect("mongodb://localhost:27017/e-commerce")
{result ? console.log("Mongo DB connected ") : ""}
    } catch (error) {
        console.log(error.message)
    }
} 