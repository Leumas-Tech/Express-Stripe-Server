const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/crypto/onramp_sessions', controller.createCryptoSession);
router.get('/v1/crypto/onramp_sessions/:id', controller.getCryptoSessionById);
router.get('/v1/crypto/onramp_sessions', controller.getAllCryptoSessions);



module.exports = router;
