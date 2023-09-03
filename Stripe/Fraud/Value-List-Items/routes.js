const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/radar/value_list_items', controller.createValueListItem);
router.get('/v1/radar/value_list_items/:id', controller.getValueListItemById);
router.delete('/v1/radar/value_list_items/:id', controller.deleteValueListItem);
router.get('/v1/radar/value_list_items', controller.getAllValueListItems);

module.exports = router;
