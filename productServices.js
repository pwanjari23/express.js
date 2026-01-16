const fs = require("fs");
const path = require("path");

// OPTIONAL: if you later store data in a file
const getAllProducts = () => {
  return "Fetching all products.";
};

const getProductById = (id) => {
  return `Fetching product with ID: ${id}`;
};

const addProduct = (productData) => {
  return "New product added";
};

// const updateProductById = (id, productData) => {
//   return "Update the product by its id";
// };

// const deleteProductById = (id) => {
//   return "Delete the product by its id";
// };

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
//   updateProductById,
//   deleteProductById,
};
