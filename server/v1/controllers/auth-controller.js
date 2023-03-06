const employeeService = require("../services/employee");

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

module.exports = { signup };
