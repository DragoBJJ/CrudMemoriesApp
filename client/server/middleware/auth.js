import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (token) {
      const decodeData = jwt.verify(token, "test");
      req.userID = decodeData?.id;
      next();
    } else {
      res.status(400).json({ message: "Token isn't exist." });
    }
  } catch (error) {
    res.json({ message: error });
  }
};

export default authMiddleware;
