const getProducts = (req, res) => {
  res.send("Fetching all products.");
};

const getProductsById = (req, res) => {
  const { id } = req.params;
  res.send(`Fetching product with ID: ${id}`);
};

const createProduct = (req, res) => {
  res.send("New product added");
};

const updateProductById = (req, res) => {
    res.send("Update the product by its id");
};

const deleteProductById = (req, res) => {
    res.send("Delete the product by its id");
};


module.exports = {
  getProducts,
  getProductsById,
  createProduct,
  updateProductById,
  deleteProductById,
};
