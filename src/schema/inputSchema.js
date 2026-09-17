import z, { email, string } from "zod";

export const inputSchema = z.object({
    name: string().min(4),
    emial: email(),
    password: string().min(6),
    role: string()
});