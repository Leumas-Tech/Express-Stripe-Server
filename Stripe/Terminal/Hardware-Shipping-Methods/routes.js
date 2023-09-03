const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/terminal/hardware_shipping_methods/:id', controller.getHardwareShippingMethodById);
router.get('/v1/terminal/hardware_shipping_methods', controller.getAllHardwareShippingMethods);

module.exports = router;
