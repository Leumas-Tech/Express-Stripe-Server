const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/sigma/scheduled_query_runs/:id', controller.getScheduledQueryRun);
router.get('/sigma/scheduled_query_runs', controller.listScheduledQueryRuns);

module.exports = router;
