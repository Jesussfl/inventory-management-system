const employeeService = require("../services/employee");
const { secret } = require("../../configs/auth-config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    await employeeService
      .registerEmployee({ username, email, password })
      .then(() => {
        const token = jwt.sign({ email, password }, secret, {
          expiresIn: "1h",
        });
        res.status(200).json({
          token: `Bearer ${token}`,
          message: "Employee was successfully registered",
        });
      });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
    next(err);
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  await employeeService.getOneEmployee({ email, password }).then((data) => {
    console.log(data);
    if (data.length === 0) {
      res.status(401).send({
        message: "Invalid email or password",
      });
    } else {
      const token = jwt.sign({ email: email, password: password }, secret, {
        expiresIn: "1h",
      });
      res.status(200).json({
        token: `Bearer ${token}`,
        message: "Logged in successfully",
      });
    }
  });
};

module.exports = { signup, signin };
