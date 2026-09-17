
import { configDotenv } from "dotenv"
import JWT from "jsonwebtoken"
configDotenv()

export const authenticate =  (req,res, next) =>{
    const token = JWT.sign(req.body, process.env.JWT_SECRET);
    req["token"] = token;
    console.log(token)
    next();
};

export const auth = (req,res,next) => {
    const token = req.body.token;
    req["data"] = JWT.verify(token, process.env.JWT_SECRET);
    if(req.data) next();
};