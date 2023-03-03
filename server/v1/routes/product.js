const express = require("express");
const router = express.Router();
const productController = require("../controllers/product-controller");

router
  .get("/", productController.getAllProducts)
  .post("/", productController.createProduct)
  .put("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct);

module.exports = router;
