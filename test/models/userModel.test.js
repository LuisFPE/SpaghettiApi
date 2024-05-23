import connectDB from "../../src/config/mongo.js";
import userModel from "../../src/models/userModel.js";
import mongoose from "mongoose";

// {} []        

const userData = {
    email: "mimail@gmail.com",
    username: "usuario",
    password: "1234",
    role: "admin",
}

describe("Test de modelo de usuario", ()=>{
    beforeAll(async ()=>{
        await connectDB();
        await mongoose.connection.collections["users"].drop();
    })
    afterAll(async ()=>{
        await mongoose.connection.close();
    })
    test("añadir registro", async()=>{

        const newModel = await userModel.create(userData);
        expect(newModel.email).toEqual(userData.email);
        expect(newModel.username).toEqual(userData.username);
        expect(newModel.role).toEqual(userData.role);
    })
    test("buscar usuario", async()=>{
        const newUser = await userModel.findOne({email:userData.email});
        expect(newUser).not.toBeNull();
        expect(newUser.email).toEqual(userData.email);
        expect(newUser.username).toEqual(userData.username);
        expect(newUser.role).toEqual(userData.role);
    })
    test("rol de usuario", async()=>{
        const userData2 = {
            email: "algo@gmail.com",
            username: "username",
            password: "password",
        }
        const newUser = await userModel.create(userData2);
        expect(newUser.role).toEqual("user");
        userData2.role="otro";
        await expect (userModel.create(userData2)).rejects.toThrow();
    })
})