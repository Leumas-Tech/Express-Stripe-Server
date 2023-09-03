const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/identity/verification_reports/:id', controller.retrieveVerificationReport);
router.get('/v1/identity/verification_reports', controller.listVerificationReports);

module.exports = router;
