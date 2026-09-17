import zod from "zod"
import { inputSchema } from "../schema/inputSchema.js"

const validateInpute = (req) => {
    const result = inputSchema.safeParse(req)
    if (result.success) {
      next()  
    } 
}