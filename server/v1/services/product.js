const express = require("express");

const getAllProducts = () => {
  return "getting all products";
};

const getOneProduct = () => {
  return "getting one product";
};

const createProduct = () => {
  return "creating product";
};

const updateProduct = () => {
  return "updating product";
};

const deleteProduct = () => {
  return "deleting product";
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
