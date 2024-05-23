import {Router} from "express";

import spaghettiApiController from "../controllers/spaghettis/spaghettiApiController.js";


const router  = Router();

router.get("/",spaghettiApiController.getAll);
router.get("/:id",spaghettiApiController.getById);
router.post("/",spaghettiApiController.create);
router.put("/:id",spaghettiApiController.update);
router.delete("/:id",spaghettiApiController.remove);
router.post("/:id/ingredient",spaghettiApiController.addIngredient);
router.delete("/:id/ingredient/:ingredientId",spaghettiApiController.removeIngredient);

export default router;