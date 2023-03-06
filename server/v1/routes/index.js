var express = require("express");
var router = express.Router();

const usersRouter = require("./users");
const productsRouter = require("./product");
const employeesRouter = require("./employee");
const authRouter = require("./auth");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/", authRouter);
router.use("/users", usersRouter);
router.use("/api/v1", productsRouter);
router.use("/api/v1", employeesRouter);
router.use("/api/v1", employeesRouter);

module.exports = router;
