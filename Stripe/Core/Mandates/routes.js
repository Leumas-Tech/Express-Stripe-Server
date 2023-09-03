const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/mandates/:id', controller.retrieveMandate);

module.exports = router;
