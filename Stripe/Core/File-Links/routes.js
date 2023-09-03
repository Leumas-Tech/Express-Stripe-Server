const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/file_links', controller.createFileLink);
router.get('/v1/file_links/:id', controller.retrieveFileLink);
router.post('/v1/file_links/:id', controller.updateFileLink);
router.get('/v1/file_links', controller.listFileLinks);

module.exports = router;
