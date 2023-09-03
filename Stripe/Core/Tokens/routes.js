const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/tokens', controller.createToken);  // Used multiple times based on the payload
router.get('/v1/tokens/:id', controller.retrieveToken);

module.exports = router;
