import spaghettiModel from "../../models/spaghettiModel.js";
import ingredientController from "../ingredients/ingredientController.js";
import userController from "../users/userController.js";

const getAll = async()=> {
    try {
        const spaghettis = await spaghettiModel.find();
        for (const spaghetti of spaghettis){
            await spaghetti.populate({
                path:"owner", 
                select: { username:1, email:1, role:1 }
            });  
        }
        return spaghettis;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const spaghetti = await spaghettiModel.findById(id);
        await spaghetti.populate({
            path:"owner", 
            select: { username:1, email:1, role:1 }
        });
        if(!spaghetti){
            return null;
        }
        await spaghetti.populate("ingredients");
        return spaghetti;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

const create = async(data) =>{
    try {
        const spaghetti = await spaghettiModel.create(data);
        await userController.addspaghetti(data.owner,spaghetti._id);
        return spaghetti;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        await spaghettiModel.findByIdAndUpdate(id,data);

        const spaghetti = await spaghettiModel.findById(id);
        return spaghetti;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const spaghetti = await spaghettiModel.findByIdAndDelete(id);
        await userController.removespaghetti(spaghetti.owner,id)
        return spaghetti;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const addIngredient = async(spaghettiId,ingredientId) =>{
    try {
        const spaghetti = await spaghettiModel.findById(spaghettiId);
        if(!spaghetti.ingredients.includes(ingredientId)){
            spaghetti.ingredients.push(ingredientId);
            await spaghetti.save();
            return spaghetti
        }
        return spaghetti;
    } catch (error) {
        return null;
    }
}
const removeIngredient = async(spaghettiId,ingredientId)=>{
    try {
        const spaghetti = await spaghettiModel.findById(spaghettiId);
        if(spaghetti.ingredients.includes(ingredientId)){
            spaghetti.ingredients = spaghetti.ingredients.filter(u=> u!==ingredientId);
            await spaghetti.save();
            return spaghetti
        }
        return spaghetti;
    } catch (error) {
        return null;
    }
}
export const functions = {
    getAll,
    getById,
    create,
    update,
    remove,
    addIngredient,
    removeIngredient
}

export default functions;