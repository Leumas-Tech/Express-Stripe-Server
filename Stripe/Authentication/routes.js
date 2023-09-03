const express = require('express');
const router = express.Router();
const controller = require('./controllers');


router.post('/authenticate', controller.authenticate);

module.exports = router;
