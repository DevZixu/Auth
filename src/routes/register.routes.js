import { Router } from "express";
import { validateInpute } from "../utils/inputValidator.js";
import { regUser } from "../controllers/reguser.js";

const regRouter = Router();

regRouter.post("/register", validateInpute, regUser);

export default regRouter;

