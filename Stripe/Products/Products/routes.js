const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/products', controller.createProduct);
router.get('/v1/products/:id', controller.retrieveProduct);
router.post('/v1/products/:id', controller.updateProduct);
router.get('/v1/products', controller.listProducts);
router.delete('/v1/products/:id', controller.deleteProduct);
router.get('/v1/products/search', controller.searchProducts);

module.exports = router;
