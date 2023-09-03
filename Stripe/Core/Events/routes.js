const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/events/:id', controller.retrieveEvent);
router.get('/v1/events', controller.listEvents);


module.exports = router;
