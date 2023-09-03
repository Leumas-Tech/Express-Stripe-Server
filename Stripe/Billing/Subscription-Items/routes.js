const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/subscription_items', controller.createSubscriptionItem);
router.get('/v1/subscription_items/:id', controller.retrieveSubscriptionItem);
router.post('/v1/subscription_items/:id', controller.updateSubscriptionItem);
router.delete('/v1/subscription_items/:id', controller.deleteSubscriptionItem);
router.get('/v1/subscription_items', controller.listSubscriptionItems);

module.exports = router;
