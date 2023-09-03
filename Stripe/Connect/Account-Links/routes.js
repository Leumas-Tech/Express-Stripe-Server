const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Existing routes...

router.post('/v1/account_links', controller.createAccountLink);

module.exports = router;
