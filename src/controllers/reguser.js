const userDb = []

export const regUser = (req, res) => {
    const {name, email, password, role} = req.body
    const user = {
        id: userDb.length + 1,
        name: name,
        email: email,
        password: password,
        role: role
    };
    const existing = userDb.find(user => user.email === email);
    if (!existing) {
        userDb.push(user);
        console.log(userDb);
        return res.status(200).json({
            status :  "created",
            message: "User has been registered"
        })
    };
    return res.status(409).json({
        message: "user with this email already exists"
    });
};