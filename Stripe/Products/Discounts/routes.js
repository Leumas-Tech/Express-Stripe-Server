const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.delete('/customers/:id/discount', controller.deleteCustomerDiscount);
router.delete('/subscriptions/:id/discount', controller.deleteSubscriptionDiscount);

module.exports = router;
