const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/plans', controller.createPlan);
router.get('/v1/plans/:id', controller.getPlan);
router.post('/v1/plans/:id', controller.updatePlan); // Typically, you'd use PUT or PATCH for updating resources.
router.delete('/v1/plans/:id', controller.deletePlan);
router.get('/v1/plans', controller.listPlans);

module.exports = router;
