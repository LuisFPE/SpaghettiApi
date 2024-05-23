import {Router} from "express";

import ingredientApiController from "../controllers/ingredients/ingredientApiController.js";


const router  = Router();

router.get("/",ingredientApiController.getAll);
router.get("/:id",ingredientApiController.getById);
router.post("/",ingredientApiController.create);
router.put("/:id",ingredientApiController.update);
router.delete("/:id",ingredientApiController.remove);

export default router;