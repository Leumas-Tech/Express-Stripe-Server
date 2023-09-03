const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/subscription_items/:id/usage_records', controller.createUsageRecord);
router.get('/v1/subscription_items/:id/usage_record_summaries', controller.listUsageRecordSummaries);

module.exports = router;
