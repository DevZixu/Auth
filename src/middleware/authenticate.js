import { configDotenv } from "dotenv"
import JWT from "jsonwebtoken"
configDotenv()

export const authenticate = async (req,res, next) =>{
    let token = await JWT.sign(req.body, process.env.JWT.SECRET);
    console.log(token)
    res.json({
        message: "Authentication Successful",
        token: token
    });
    next();
};
