import { Router } from "express";
import * as authController from "../controller/auth.controller.ts";

const router = Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.userLogin);

export default router;