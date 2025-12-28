import { Router } from "express";
import { UserController } from "./use.contorller";

const router = Router();

router.post("/register", UserController.createUser);

export const UserRoutes = router;
