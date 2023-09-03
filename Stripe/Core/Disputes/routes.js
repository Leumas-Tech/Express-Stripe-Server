const express = require('express');
const router = express.Router();
const controller = require('./controllers');


router.get('/v1/disputes/:id', controller.retrieveDispute);
router.post('/v1/disputes/:id', controller.updateDispute);
router.post('/v1/disputes/:id/close', controller.closeDispute);
router.get('/v1/disputes', controller.listDisputes);



module.exports = router;
 