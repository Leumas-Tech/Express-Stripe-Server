const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// List all SetupAttempts for a specific SetupIntent
router.get('/v1/setup_attempts', controller.listSetupAttempts);


module.exports = router;
