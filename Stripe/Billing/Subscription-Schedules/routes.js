const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/subscription_schedules', controller.createSubscriptionSchedule);
router.get('/v1/subscription_schedules/:id', controller.retrieveSubscriptionSchedule);
router.post('/v1/subscription_schedules/:id', controller.updateSubscriptionSchedule);
router.post('/v1/subscription_schedules/:id/cancel', controller.cancelSubscriptionSchedule);
router.post('/v1/subscription_schedules/:id/release', controller.releaseSubscriptionSchedule);
router.get('/v1/subscription_schedules', controller.listSubscriptionSchedules);

module.exports = router;
