import e from "express";
import { validateInpute } from "./utils/inputValidator.js";
import regRouter from "./routes/register.routes.js";
import loginRoute from "./routes/login.route.js";

const app = e();

//middleware to parse json. 
app.use(e.json());

app.use(regRouter); 
app.use(loginRoute)


app.get("/", (req,res) => {
    res.status(201).json({
        message: "Hello World",
        status: "done"
    });
});

export default app;