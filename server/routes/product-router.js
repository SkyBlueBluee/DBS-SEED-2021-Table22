const express = require("express");

const ProductCtrl = require("../controllers/product-ctrl");

const router = express.Router();

router.put("/products/:id", ProductCtrl.updateProduct);
router.get("/products", ProductCtrl.getProducts);

module.exports = router;
