const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/sources', controller.createSource);
router.get('/sources/:id', controller.retrieveSource);
router.post('/sources/:id', controller.updateSource);
router.post('/customers/:id/sources', controller.createCustomerSource);
router.delete('/customers/:id/sources/:id', controller.deleteCustomerSource);

module.exports = router;
