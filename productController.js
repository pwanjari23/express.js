const productServices = require("../services/productServices");

const getProducts = (req, res) => {
  const result = productServices.getAllProducts();
  res.send(result);
};

const getProductsById = (req, res) => {
  const { id } = req.params;
  const result = productServices.getProductById(id);
  res.send(result);
};

const createProduct = (req, res) => {
  const result = productServices.addProduct(req.body);
  res.send(result);
};

// const updateProductById = (req, res) => {
//   const { id } = req.params;
//   const result = productServices.updateProductById(id, req.body);
//   res.send(result);
// };

// const deleteProductById = (req, res) => {
//   const { id } = req.params;
//   const result = productServices.deleteProductById(id);
//   res.send(result);
// };

module.exports = {
  getProducts,
  getProductsById,
  createProduct,
//   updateProductById,
//   deleteProductById,
};
