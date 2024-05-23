import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        unique: true,
    },
    description: String,
})

const ingredientModel = mongoose.model("ingredients",ingredientSchema);

export default ingredientModel;