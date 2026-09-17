export const login = (req,res) => {
    res.json({
        message: "hello User",
        token: req.token
    });
};