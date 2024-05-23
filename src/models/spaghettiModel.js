import mongoose from "mongoose";

const spaghettiSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    sauce: {
        type:String,
        enum: ["Red","White","Green"],
        default: "Red"
    },
    description: String,
    recipe: String,
    ingredients: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'ingredients'
        }
    ]
});

const spaghettiModel = mongoose.model("spaghettis",spaghettiSchema);

export default spaghettiModel;