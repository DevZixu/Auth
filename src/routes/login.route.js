import { Router } from "express";
import { authenticate } from "../middleware/authenticate.js";
import { login } from "../controllers/login.js";

const loginRoute = Router();

loginRoute.post("/login", authenticate, login)

export default loginRoute;