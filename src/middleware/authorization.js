export const authorize = (req, res, next) => {
    const role = req.data.role
    if (role === "admin") next();
};