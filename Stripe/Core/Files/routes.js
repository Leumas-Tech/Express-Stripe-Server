const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/files', controller.createFile);
router.get('/v1/files/:id', controller.retrieveFile);
router.get('/v1/files', controller.listFiles);


module.exports = router;
