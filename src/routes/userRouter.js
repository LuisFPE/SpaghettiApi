import {Router} from "express";

import userApiController from "../controllers/users/userApiController.js";
import { isAdmin,isAuthenticated } from "../middlewares/authMiddleware.js";

const router  = Router();

router.get("/",isAdmin,userApiController.getAll);
router.get("/byproperty",userApiController.getByProperty);
router.get("/bytoken",isAuthenticated,userApiController.getByToken);
router.get("/:id",userApiController.getById);
router.post("/",isAdmin,userApiController.create);
router.put("/:id",isAdmin,userApiController.update);
router.delete("/:id",isAdmin,userApiController.remove);

export default router;