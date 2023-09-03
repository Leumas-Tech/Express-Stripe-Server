const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/radar/value_lists', controller.createValueList);
router.get('/v1/radar/value_lists/:id', controller.getValueListById);
router.post('/v1/radar/value_lists/:id', controller.updateValueList);
router.delete('/v1/radar/value_lists/:id', controller.deleteValueList);
router.get('/v1/radar/value_lists', controller.getAllValueLists);



module.exports = router;
