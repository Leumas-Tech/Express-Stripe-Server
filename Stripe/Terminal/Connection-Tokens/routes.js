const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/terminal/connection_tokens', controller.createConnectionToken);

module.exports = router;
