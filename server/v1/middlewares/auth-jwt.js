const jwt = require("jwt");
const config = require("../../configs/auth-config");

const verifyToken = (req, res, next) => {
  const {token} = req.body;

  if (!token) {
    return res.status(403).send({
      message: "No token provided",
    });
  }
  try {
    const decoded = jwt.verify(token, config.secret);
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({
      msg: "Invalid token",
    })
  }
  next();
  
};

module.exports = { verifyToken };
