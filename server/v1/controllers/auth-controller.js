const employeeService = require("../services/employee");
const { secret } = require("../../configs/auth-config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const signup = async (req, res, next) => {
  try {
    await employeeService.registerEmployee(req.body).then(() =>
      res.send({
        message: "Employee was successfully registered",
      })
    );
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
    next(err);
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  employeeService.getOneEmployee({ email, password }).then((data) => {
    console.log(data);
    if ((data.length = 0)) {
      res.status(401).send({
        message: "Invalid email or password",
      });
    } else {
      const token = jwt.sign({ email: email, password: password }, secret, {
        expiresIn: "1h",
      });
      res.status(200).send({
        message: "Logged in successfully",
        token: token,
      });
    }
  });
};

module.exports = { signup, signin };
