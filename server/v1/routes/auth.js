const router = require("express").Router();
const authController = require("../controllers/auth-controller.js");
const {
  checkDuplicateUsernameOrEmail,
} = require("../middlewares/verify-signup.js");

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/api/auth/signup", authController.signup);
//   .post("/api/auth/signin", authController.signin);

// router.post("/login", authController.login);
// // router.get("/logout", authController.logout);

module.exports = router;
