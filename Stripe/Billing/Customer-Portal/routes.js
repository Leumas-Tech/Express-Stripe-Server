const express = require('express');
const router = express.Router();
const controller = require('./controllers');


router.post('/portal/sessions', controller.createPortalSession);

router.post('/portal/configurations', controller.createPortalConfiguration);

router.put('/portal/configurations/:configId', controller.updatePortalConfiguration);

router.get('/portal/configurations/:configId', controller.retrievePortalConfiguration);

router.get('/portal/configurations', controller.listPortalConfigurations);




module.exports = router;
