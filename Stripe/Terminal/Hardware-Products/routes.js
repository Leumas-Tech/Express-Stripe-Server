const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/terminal/hardware_products/:id', controller.getHardwareProductById);
router.get('/v1/terminal/hardware_products', controller.getAllHardwareProducts);

module.exports = router;
