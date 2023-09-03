const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/reporting/report_runs', controller.createReportRun);
router.get('/reporting/report_runs/:id', controller.getReportRun);
router.get('/reporting/report_runs', controller.listReportRuns);

module.exports = router;
