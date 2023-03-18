const router = require("express").Router();
const authController = require("../controllers/auth-controller.js");

router
  .post("/api/auth/signup", authController.signup)
  .post("/api/auth/signin", authController.signin);

module.exports = router;
