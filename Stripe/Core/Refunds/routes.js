const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/refunds', controller.createRefund);
router.get('/v1/refunds/:id', controller.retrieveRefund);
router.post('/v1/refunds/:id', controller.updateRefund);
router.post('/v1/refunds/:id/cancel', controller.cancelRefund);
router.get('/v1/refunds', controller.listRefunds);


module.exports = router;
