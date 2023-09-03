const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/crypto/onramp_quotes', controller.getCryptoOnrampQuotes);


module.exports = router;
