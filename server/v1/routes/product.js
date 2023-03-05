const express = require("express");
const router = express.Router();
const productController = require("../controllers/product-controller");

router
  .get("/products", productController.getAllProducts)
  .post("/products", productController.createProduct)
  .put("/products/:id", productController.updateProduct)
  .delete("/products/:id", productController.deleteProduct);

module.exports = router;
