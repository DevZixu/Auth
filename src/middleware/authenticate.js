import { configDotenv } from "dotenv"
import JWT from "jsonwebtoken"
configDotenv()

const authenticate = async (req,res) =>{
    let token = await JWT.sign(req, process.env.JWT.SECRET);
    res.json({
        message: "Authentication Successful",
        token: token
    });
};