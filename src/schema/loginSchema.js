import zod, { email,string } from "zod"; 

export const loginSchema = zod.object({
    email: email(),
    password: string()
});
