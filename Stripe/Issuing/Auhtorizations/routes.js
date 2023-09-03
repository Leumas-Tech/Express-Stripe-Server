const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/issuing/authorizations/:id', controller.retrieveAuthorization);
router.put('/v1/issuing/authorizations/:id', controller.updateAuthorization);
router.post('/v1/issuing/authorizations/:id/approve', controller.approveAuthorization);
router.post('/v1/issuing/authorizations/:id/decline', controller.declineAuthorization);
router.get('/v1/issuing/authorizations', controller.listAuthorizations);


module.exports = router;
