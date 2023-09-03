const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/terminal/configurations', controller.createConfiguration);
router.get('/terminal/configurations/:id', controller.retrieveConfiguration);
router.post('/terminal/configurations/:id', controller.updateConfiguration);
router.delete('/terminal/configurations/:id', controller.deleteConfiguration);
router.get('/terminal/configurations', controller.listConfigurations);

module.exports = router;
