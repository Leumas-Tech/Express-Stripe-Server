const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/radar/early_fraud_warnings/:id', controller.getEarlyFraudWarningById);
router.get('/v1/radar/early_fraud_warnings', controller.getAllEarlyFraudWarnings);


module.exports = router;
