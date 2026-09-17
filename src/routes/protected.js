import { Router } from "express";
import { auth } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorization.js";
import { admin } from "../controllers/admin.js";

const protectedRoute = Router();

protectedRoute.post("/protected", auth, authorize, admin);

export default protectedRoute;