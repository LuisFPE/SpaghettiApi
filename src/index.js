import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongo.js";
import router from "./routes/router.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: 'json' };


dotenv.config();
const CONTAINER_PORT = 3000;

const app = express();
app.use(express.json()); // api
//app.use(express.urlencoded({extended:true})); // vistas
connectDB();

app.use("/",swaggerUi.serve,swaggerUi.setup(swaggerDocument));

app.use("/api",router);

app.listen(CONTAINER_PORT ,()=>{
    console.log("Aplicacion en marcha en el puerto "+process.env.APP_PORT);
})
