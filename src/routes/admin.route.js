import { Router } from "express";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorization.js";
import  admin  from "../controllers/protected.js";

const adminRoute = Router();

adminRoute.get("/admin", authenticate, authorize, admin);