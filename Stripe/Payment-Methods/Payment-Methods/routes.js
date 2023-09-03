const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/payment_methods', controller.createPaymentMethod);
router.get('/payment_methods/:id', controller.retrievePaymentMethod);
router.get('/customers/:customer/payment_methods/:payment_method', controller.retrieveCustomerPaymentMethod);
router.post('/payment_methods/:id', controller.updatePaymentMethod);
router.get('/payment_methods', controller.listAllPaymentMethods);
router.get('/customers/:customer/payment_methods', controller.listCustomerPaymentMethods);
router.post('/payment_methods/:id/attach', controller.attachPaymentMethod);
router.post('/payment_methods/:id/detach', controller.detachPaymentMethod);

module.exports = router;
