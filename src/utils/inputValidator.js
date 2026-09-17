import { inputSchema } from "../schema/inputSchema.js";
import { loginSchema } from "../schema/loginSchema.js";
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
  const {email,password} = req.body
  const userDb = []
  const existing = userDb.find((user) => user.email === email)
  if (result.success === false && !existing){
    return res.status(401).json({
      message: "hello world"
    });
  };
  // const passIsValid = await bcrypt.compare()
   next(); 
};