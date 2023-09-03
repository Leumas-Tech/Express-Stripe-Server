const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Existing routes...

router.post('/v1/account_sessions', controller.createAccountSession);

module.exports = router;
