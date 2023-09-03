const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/financial_connections/sessions', controller.createSession);
router.get('/v1/financial_connections/sessions/:id', controller.retrieveSession);


module.exports = router;
