const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/application_fees/:id', controller.retrieveApplicationFee);
router.get('/v1/application_fees', controller.listApplicationFees);

module.exports = router;
