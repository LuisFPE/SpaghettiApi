import spaghettiController from "./spaghettiController.js";

const getAll = async(req,res)=>{
    const isAdmin = req.user.role === "admin";
    const userId = isAdmin ? null : req.user._id;
     const spaghettis = await spaghettiController.getAll(userId);
    res.json({data:spaghettis});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const spaghetti = await spaghettiController.getById(id);
    res.json({data:spaghetti});
}

const create = async(req,res)=>{
    const owner = req.user._id
    const data = {...req.body,owner};
    const spaghetti = await spaghettiController.create(data);
    res.json({data:spaghetti})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const spaghetti = await spaghettiController.update(id,req.body);
    res.json({data:spaghetti})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const spaghetti = await spaghettiController.remove(id);
    res.json({data:spaghetti})
}

const addIngredient = async(req,res)=>{
    const spaghettiId = req.params.id;
    const ingredientId = req.body.ingredientId;
    const spaghetti = await spaghettiController.addIngredient(spaghettiId,ingredientId);
    res.json({data:spaghetti})
}

const removeIngredient = async(req,res)=>{
    const spaghettiId = req.params.id;
    const ingredientId = req.params.ingredientId;
    const spaghetti = await spaghettiController.removeIngredient(spaghettiId,ingredientId);
    res.json({data:spaghetti})
}

export default{
    getAll,
    getById,
    create,
    update,
    remove,
    addIngredient,
    removeIngredient
}

