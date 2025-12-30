import { Router } from "express";
import { UserController } from "./use.contorller";

const router = Router();

router.post("/register", UserController.createUser);
router.get("/all-users", UserController.getAllUsers);

export const UserRoutes = router;
