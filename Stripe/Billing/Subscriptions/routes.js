const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/subscriptions', controller.createSubscription);
router.get('/v1/subscriptions/:id', controller.retrieveSubscription);
router.post('/v1/subscriptions/:id', controller.updateSubscription);
router.post('/v1/subscriptions/:id/resume', controller.resumeSubscription);
router.delete('/v1/subscriptions/:id', controller.cancelSubscription);
router.get('/v1/subscriptions', controller.listSubscriptions);
router.get('/v1/subscriptions/search', controller.searchSubscriptions);

module.exports = router;