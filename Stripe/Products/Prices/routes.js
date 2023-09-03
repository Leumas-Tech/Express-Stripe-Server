const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/products', controller.createProduct);
router.get('/products/:id', controller.getProduct);
router.post('/products/:id', controller.updateProduct); // Note: This may be better suited as a PUT request.
router.get('/products', controller.listProducts);
router.delete('/products/:id', controller.deleteProduct);
router.get('/products/search', controller.searchProducts); // You may also consider POST if your search criteria become extensive.

module.exports = router;
