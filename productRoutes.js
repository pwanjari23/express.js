const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getProducts);

router.post("/", productController.createProduct);

router.get("/:id", productController.getProductsById);

router.put("/:id", productController.updateProductById);

router.delete("/:id", productController.deleteProductById);

module.exports = router;
