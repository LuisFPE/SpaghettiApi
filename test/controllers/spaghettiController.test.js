import connectDB from "../../src/config/mongo.js";
import mongoose from 'mongoose';
import spaghettiController from "../../src/controllers/spaghettis/spaghettiController.js";
import ingredientController from "../../src/controllers/ingredients/ingredientController.js";
import userController from "../../src/controllers/users/userController.js"

let spaghettiId = null;
let userId = null;
let newUser;
describe("Test de spaghettiController",()=>{
    beforeAll(async ()=>{
        await connectDB();
        try{
            await mongoose.connection.collections["spaghettis"].drop();
            newUser = await userController.getByProperty("email","mail");
            if(!newUser){
                newUser = await userController.create({username:"algo",email:"mail",password:"1234"});
            }
        }
        catch(error){
            console.error(error);
        }
    })
    afterAll(async()=>{
        await mongoose.connection.close();
    })

    test("Crear spaghetti",async()=>{
        const users = await userController.getAll();
        console.log("usuario",users[0])
        const spaghettiData = {
            name: "Pasta Bologña",
            owner: users[0],
            description: "Pasta con salsa de tomate y carne molida",
            recipe: "Coloque una sartén sobre la cocina a fuego medio y cuando esté caliente, añada el aceite.  Agregue la zanahoria, apio, y cebolla y cocine por unos 10 minutos, revolviendo ocasionalmente, hasta que los vegetales se comiencen a dorar. Aumente el fuego a alto.  Tome porciones de carne del tamaño de una cucharada y agréguela de una por una, revolviendo entre una y otra adición.  Cocine, desmenuzando la carne hasta que ya no esté cruda, produzca líquido, y no se pegue más en grumos, despúes agregue la pasta cuando este lista.",
            ingredients: ["carne molida", "zanahorias", "apio", "cebolla", "tomates"]
        }
        const spaghetti = await spaghettiController.create(spaghettiData)
        spaghettiId = spaghetti._id;
        expect(spaghetti).not.toBeNull();
        expect(spaghetti.owner).toEqual(users[0]._id);
    })
    test("Añadir ingrediente",async()=>{
        
        userId = newUser._id;
        const spaghetti = await spaghettiController.addingredient(spaghettiId,newUser._id);
        expect(spaghetti).not.toBeNull();
        expect(spaghetti.users).toContain(newUser._id);

    })
    test("Quitar ingrediente",async()=>{
        const spaghetti = await spaghettiController.removeingredient(spaghettiId,userId);
        expect(spaghetti).not.toBeNull();
        expect(spaghetti.users).not.toContain(userId);
    })
})