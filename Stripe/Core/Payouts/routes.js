const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/payouts', controller.createPayout);
router.get('/v1/payouts/:id', controller.retrievePayout);
router.post('/v1/payouts/:id', controller.updatePayout);
router.get('/v1/payouts', controller.listPayouts);
router.post('/v1/payouts/:id/cancel', controller.cancelPayout);
router.post('/v1/payouts/:id/reverse', controller.reversePayout);



module.exports = router;
