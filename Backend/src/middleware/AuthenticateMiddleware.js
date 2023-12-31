import jwt  from "jsonwebtoken";

const AuthenticateMiddleware = (req, res) => {
  try {
    const token = req.headers.authorization;
    token = token.replace("Bearer", "");
    jwt.verify(token, process.env.JWT_SECRET);

    if (!req.session.user || !req.session.token) {
      return res.status(401).json({
        message: "invalid request",
      });
    }

    if (req.session.token !== token) {
      return res.status(401).json({
        message: "Invalid Token",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "invalid Request",
      error,
    });
  }
};

export default AuthenticateMiddleware;
