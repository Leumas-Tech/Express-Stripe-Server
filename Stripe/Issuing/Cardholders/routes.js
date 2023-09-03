const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/issuing/cardholders', controller.createCardholder);
router.get('/v1/issuing/cardholders/:id', controller.retrieveCardholder);
router.put('/v1/issuing/cardholders/:id', controller.updateCardholder);
router.get('/v1/issuing/cardholders', controller.listCardholders);

module.exports = router;
