import { Router } from "express";
import { authenticate } from "../middleware/authenticate.js";
import { login } from "../controllers/login.js";
import { validateLogin } from "../utils/inputValidator.js";

const loginRoute = Router();

loginRoute.post("/login", validateLogin , authenticate , login)

export default loginRoute;