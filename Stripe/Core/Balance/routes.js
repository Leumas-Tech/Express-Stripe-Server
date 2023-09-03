const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/balance', controller.retrieveBalance);

module.exports = router;
