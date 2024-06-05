import {Router} from "express";

import userRouter from "./userRouter.js";
import spaghettiRouter from "./spaghettiRouter.js";
import ingredientRouter from "./ingredientRouter.js";
import authRouter from "./authRouter.js";
import { isAuthenticated,isAdmin } from "../middlewares/authMiddleware.js";

const router  =  Router();

router.get("/",(req,res)=>{
    res.json({data:"hello api"});
})

router.use("/users",isAuthenticated,userRouter);
router.use("/spaghettis",isAuthenticated,spaghettiRouter);
router.use("/ingredients",isAuthenticated,ingredientRouter);
router.use("/",authRouter);
export default router;