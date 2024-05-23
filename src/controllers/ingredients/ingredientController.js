import ingredientModel from "../../models/ingredientModel.js";
import spaghettiController from "../spaghettis/spaghettiController.js"

const getAll = async () =>{
    try {
        const ingredients = await ingredientModel.find();
        return ingredients;
    } catch (error) {
        console.error(error);
        return [];
    }
}

const getById = async(id) =>{
    try {
        const ingredient = await ingredientModel.findById(id);
        return ingredient;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}
const getByProperty = async(property,value) =>{
    try {
        const ingredient = await ingredientModel.find({[property]:value})
        return ingredient;
    } catch (error) {
        return null;
    }
}
const create = async(data) =>{
    try {
        const ingredient = await ingredientModel.create(data);
        return ingredient;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
         await ingredientModel.findByIdAndUpdate(id,data);

        const ingredient = await ingredientModel.findById(id);
        return ingredient;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const ingredient = await ingredientModel.findByIdAndDelete(id);
        return ingredient;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const removeMany = async(ids) =>{
    try {
        const ingredients = await ingredientModel.deleteMany({ _id: { $in: ids } });
        return ingredients;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const functions = {
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove,
    removeMany,
}

export default functions;