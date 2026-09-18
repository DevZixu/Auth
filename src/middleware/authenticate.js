import { configDotenv } from "dotenv"
import JWT from "jsonwebtoken"
configDotenv()

export const authenticate =  (req, res, next) => {
  const token = JWT.sign(req.data, process.env.JWT_SECRET);
  req["token"] = token;
  next();
};

