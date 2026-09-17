import e from "express";

const app = e();

//middleware to parse json. 
app.use(e.json());

app.get("/", (req,res) => {
    res.status(201).json({
        message: "Hello World",
        status: "done"
    });
});

export default app;