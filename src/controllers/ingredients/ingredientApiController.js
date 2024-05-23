import ingredientController from "./ingredientController.js";

const getAll = async(req,res)=>{
    const spaghettiId = req.query.spaghettiId;
    const ingredients = await ingredientController.getAll(spaghettiId);
    res.json({data:ingredients});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const ingredient = await ingredientController.getById(id);
    res.json({data:ingredient});
}

const create = async(req,res)=>{
    const ingredient = await ingredientController.create(req.body);
    res.json({data:ingredient})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const ingredient = await ingredientController.update(id,req.body);
    res.json({data:ingredient})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const ingredient = await ingredientController.remove(id);
    res.json({data:ingredient})
}

export default{
    getAll,
    getById,
    create,
    update,
    remove,
}

