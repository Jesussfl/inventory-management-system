const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee-controller");

router
  .get("/employees", employeeController.getAllEmployees)
  .post("/employees", employeeController.registerEmployee)
  .put("/employees/:id", employeeController.updateEmployee)
  .delete("/employees/:id", employeeController.deleteEmployee);

module.exports = router;
