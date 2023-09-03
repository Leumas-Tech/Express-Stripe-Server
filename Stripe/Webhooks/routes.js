const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/webhook_endpoints', controller.createWebhookEndpoint);
router.get('/v1/webhook_endpoints/:id', controller.retrieveWebhookEndpoint);
router.post('/v1/webhook_endpoints/:id', controller.updateWebhookEndpoint);
router.get('/v1/webhook_endpoints', controller.listWebhookEndpoints);
router.delete('/v1/webhook_endpoints/:id', controller.deleteWebhookEndpoint);

module.exports = router;
