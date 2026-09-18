import { Router } from "express";

import { authorize } from "../middleware/authorization.js";
import protectedCrt from "../controllers/protected.js";

const protectedRoute = Router();

protectedRoute.get("/protected", authorize, protectedCrt);

export default protectedRoute;