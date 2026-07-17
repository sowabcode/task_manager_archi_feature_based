import { Router } from "express";
import { validate } from "../../../core/middlewares/validate";
import { loginSchema, registerSchema } from "../schemas/auth.schema";
import { authController } from "../index";
import { authenticate } from "../../../core/middlewares/authenticate";

const router = Router();

router.post("/register", validate(registerSchema), authController.register);

router.post("/login", validate(loginSchema), authController.login);

router.get("/me", authenticate, authController.me);

export default router;
