const express = require('express');
const router = express.Router();
const controller = require('./controllers');


router.post('/v1/charges', controller.createCharge);
router.get('/v1/charges/:id', controller.retrieveCharge);
router.post('/v1/charges/:id', controller.updateCharge);
router.post('/v1/charges/:id/capture', controller.captureCharge);
router.get('/v1/charges', controller.listCharges);
router.get('/v1/charges/search', controller.searchCharges);



module.exports = router;
 