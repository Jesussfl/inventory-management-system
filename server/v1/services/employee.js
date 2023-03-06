const db = require("../database/db");

const getAllEmployees = async () => {
  const employees = await db.query("select * from employees");
  return employees;
};

const getOneEmployee = () => {
  return "getting one employee";
};

const registerEmployee = async (data) => {
  const { email, password } = data;
  await db.query(
    `INSERT INTO employees
    (email, password)
    VALUES
    ('${email}', '${password}')`,
    (err, result) => {
      if (err) {
        throw err;
      } else if (result) {
        console.log("Registered", result);
      }
    }
  );
  return "registering an employee";
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
