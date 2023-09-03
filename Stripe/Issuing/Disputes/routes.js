const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Issuing disputes endpoints
router.post('/v1/issuing/disputes', controller.createDispute);
router.post('/v1/issuing/disputes/:id/submit', controller.submitDispute);
router.get('/v1/issuing/disputes/:id', controller.retrieveDispute);
router.post('/v1/issuing/disputes/:id', controller.updateDispute);
router.get('/v1/issuing/disputes', controller.listDisputes);

module.exports = router;
