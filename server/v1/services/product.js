const express = require("express");
const db = require("../database/db");

const getAllProducts = async () => {
  const products = await db.query("select * from products");
  return products;
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
