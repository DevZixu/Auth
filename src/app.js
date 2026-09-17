import e from "express";
import regRouter from "./routes/register.routes.js";
import loginRoute from "./routes/login.route.js";
import protectedRoute from "./routes/protected.js";

const app = e();

//middleware to parse json. 
app.use(e.json());

app.use(regRouter); 
app.use(loginRoute); 
app.use(protectedRoute); 


app.get("/", (req,res) => {
    res.status(201).json({
        message: "Hello World",
        status: "done"
    });
});

export default app;