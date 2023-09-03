const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/issuing/cards', controller.createCard);
router.get('/v1/issuing/cards/:id', controller.retrieveCard);
router.put('/v1/issuing/cards/:id', controller.updateCard);
router.get('/v1/issuing/cards', controller.listCards);

// For test helper endpoints
router.post('/v1/test_helpers/issuing/cards/:card/shipping/ship', controller.shipCard);
router.post('/v1/test_helpers/issuing/cards/:card/shipping/deliver', controller.deliverCard);
router.post('/v1/test_helpers/issuing/cards/:card/shipping/return', controller.returnCard);
router.post('/v1/test_helpers/issuing/cards/:card/shipping/fail', controller.failCardShipping);
router.post('/v1/test_helpers/issuing/cards/:card/shipping/submit', controller.submitCardForShipping);


module.exports = router;
