const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// ... [other routes if any]

router.get('/v1/terminal/hardware_skus/:id', controller.getHardwareSkuById);
router.get('/v1/terminal/hardware_skus', controller.getAllHardwareSkus);

module.exports = router;
