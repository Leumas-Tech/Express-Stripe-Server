const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/test_helpers/test_clocks', controller.createTestClock);
router.get('/v1/test_helpers/test_clocks/:id', controller.retrieveTestClock);
router.delete('/v1/test_helpers/test_clocks/:id', controller.deleteTestClock);
router.post('/v1/test_helpers/test_clocks/:id/advance', controller.advanceTestClock);
router.get('/v1/test_helpers/test_clocks', controller.listTestClocks);

module.exports = router;
