const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/tax/settings', controller.retrieveTaxSettings);
router.post('/tax/settings', controller.updateTaxSettings);

module.exports = router;
