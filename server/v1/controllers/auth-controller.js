const employeeService = require("../services/employee");

const login = async (req, res) => {
  console.log(req.body);
  employeeService.registerEmployee(req.body);
};

module.exports = { login };
