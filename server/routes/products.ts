import {ProductSearchController} from "../controllers/product-search.controller";

const express = require('express');
const router = express.Router();

import {ProductsController} from "../controllers/products.controller";
const productsController = new ProductsController();
const productSearchController = new ProductSearchController();
// i need a route for the product search controller
router.get('/notifications/search', productSearchController.searchProducts);
router.get('product/search/category/:category', productSearchController.searchProductsByCategory)
router.get('/notifications/search/category', productSearchController.searchProductsByCategory);
router.get('/notifications/search/price', productSearchController.searchProductsByPrice);
// i need a route for the products controller
router.post('/notifications/', productsController.createProduct);
router.get('/notifications/:id', productsController.getSingleProduct);
router.get('/notifications/', productsController.getAllProducts);
// route for get product by id
router.get('notifications/product/:id', productsController.getProductById)
router.put('/notifications/:id', productsController.updateProduct);
// router.delete('/notifications/:id', productsController.deleteProduct);
router.get('/product/sale/:id', productsController.productOnSale)
// q: any methods i forgot?
// a: delete, post
module.exports = router;
