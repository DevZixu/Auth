import { inputSchema } from "../schema/inputSchema.js";
import { hashPass } from "./hashpass.js";

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