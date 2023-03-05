const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./v1/routes/index");
const usersRouter = require("./v1/routes/users");
const productsRouter = require("./v1/routes/product");
const employeesRouter = require("./v1/routes/employee");
const authRouter = require("./v1/routes/auth");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "/v1/views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// app.use("/", authRouter);
app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/v1", productsRouter);
app.use("/api/v1", employeesRouter);
app.use("/api/v1", employeesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
