const db = require("../database/db");

const getAllEmployees = async () => {
  const employees = await db.query("select * from employees");
  return employees;
};

const getOneEmployee = async (data) => {
  const result = await db.query(
    `select * from employees where email = '${data.email}' and password = '${data.password}'`
  );
  return result;
};

const registerEmployee = async (data) => {
  const { username, email, password } = data;
  const result = await db.query(
    `INSERT INTO employees
    (username, email, password)
    VALUES
    ('${username}', '${email}', '${password}')`
  );

  let message = "Error in registering employee";

  if (result.affectedRows) {
    message = "Employee Registered successfully";
  }

  return message;
};

const updateEmployee = () => {
  return "updating an employee";
};

const deleteEmployee = () => {
  return "deleting an employee";
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  registerEmployee,
  updateEmployee,
  deleteEmployee,
};
