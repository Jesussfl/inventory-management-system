const employeeService = require("../services/employee");
const db = require("../database/db");

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const userFound = await db.query(
    "SELECT * FROM employee WHERE username = '" +
      req.body.username +
      "' OR email = '" +
      req.body.email +
      "'"
  );

  if (userFound) {
    res.status(400).send({
      message: "Duplicate username or email",
    });
    return;
  }
  next();
};

module.exports = checkDuplicateUsernameOrEmail;
