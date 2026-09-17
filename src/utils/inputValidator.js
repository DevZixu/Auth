import { inputSchema } from "../schema/inputSchema.js";
import { loginSchema } from "../schema/loginSchema.js";
import { userDb } from "../controllers/reguser.js";
import { hashPass } from "./hashpass.js";
import bcrypt from "bcrypt";

export const validateInpute = async (req, res, next) => {
  const result = inputSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      message: "bad Request"
    })
  };
  const hashedPass = await hashPass(req.body.password);
  req.body.password = hashedPass;
  next();
};

export const validateLogin = async (req, res, next) => {
  const result = await loginSchema.safeParse(req.body);
  const {email,password} = result.data
  const user = userDb.find((user) => user.email === email)
  if (result.success){
    const isMatch = await bcrypt.compare(password, user.password)  
    if (isMatch) next();
  };
};