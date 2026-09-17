
export const regUser = (req, res) => {
    const {name, email, password, role} = req.body
    const userDb = []
    const user = {
        id : userDb.length + 1,
        name : name,
        email: email,
        password: password,
        role: role
    };
    const existing = userDb.find(user => user.email === email);
    if (!existing) userDb.push(user);
    return res.status(200).json({
        status :  "created",
        message: "User has been registered"
    });
};