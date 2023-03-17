const router = require("express").Router();
const authController = require("../controllers/auth-controller.js");
const verifyToken = require("../middlewares/auth-jwt.js");

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router
  .post("/api/auth/signup", authController.signup)
  .post("/api/auth/signin", authController.signin)
  .post("/home", verifyToken, (req, res) => {
    res.send({
      message: "Welcome to the home page",
    });
  });

module.exports = router;
