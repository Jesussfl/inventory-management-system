const employeeService = require("../services/employee");

const getAllEmployees = async (req, res) => {
  await employeeService.getAllEmployees().then((data) => {
    console.log(data);
  });
};

const getOneEmployee = (req, res) => {
  console.log(employeeService.getOneEmployee());
};

const registerEmployee = (req, res) => {
  console.log(employeeService.registerEmployee());
};

const updateEmployee = (req, res) => {
  console.log(employeeService.updateEmployee());
};

const deleteEmployee = (req, res) => {
  console.log(employeeService.deleteEmployee());
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  registerEmployee,
  updateEmployee,
  deleteEmployee,
};
