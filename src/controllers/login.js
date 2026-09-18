import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { configDotenv } from "dotenv";
import {userDb} from "./reguser.js";
configDotenv();

export const login = async (req,res) => {
    const {email,password} = req.data
    const user = userDb.find((user) => user.email === email);
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch){
        req.data = { id: user.id, role: user.role, name: user.name };
        const token = JWT.sign(req.data, process.env.JWT_SECRET)
        res.setHeader("authorization", `Bearer ${token}`)
        res.json({
        message: `Hello ${user.name}`,
        status: "login successfull"
        });
    };
};