import JWT from "jsonwebtoken"

export const authorize = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(400).json({
      message: "Token does not exist"
    });
  };
  try {
        req.data = JWT.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.status(401).json({
        message: "Invalid token"
        });
    }
};