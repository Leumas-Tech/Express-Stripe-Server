const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/shipping_rates', controller.createShippingRate);
router.get('/shipping_rates/:id', controller.getShippingRate);
router.post('/shipping_rates/:id', controller.updateShippingRate); // It may be more RESTful to use PUT here.
router.get('/shipping_rates', controller.listShippingRates);

module.exports = router;
