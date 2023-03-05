const express = require("express");
const db = require("../database/db");

const getAllEmployees = async () => {
  const employees = await db.query("select * from employees");
  return employees;
};

const getOneEmployee = () => {
  return "getting one employee";
};

const registerEmployee = async () => {
  // await db.query(
  //   `INSERT INTO employees
  //   (id, email, password)
  //   VALUES
  //   (${data.id}, '${data.email}', ${data.pass})`
  // );
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
