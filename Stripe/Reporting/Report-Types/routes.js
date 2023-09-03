const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/reporting/report_types/:id', controller.getReportType);
router.get('/reporting/report_types', controller.listReportTypes);

module.exports = router;
