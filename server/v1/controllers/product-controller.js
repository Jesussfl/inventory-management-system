const productService = require("../services/product");

const getAllProducts = async (req, res) => {
  productService.getAllProducts().then((data) => console.log(data));
};

const getOneProduct = (req, res) => {
  console.log(productService.getOneProduct());
};

const createProduct = (req, res) => {
  console.log(productService.createProduct());
};

const updateProduct = (req, res) => {
  console.log(productService.updateProduct());
};

const deleteProduct = (req, res) => {
  console.log(productService.deleteProduct());
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
