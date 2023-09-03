const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// ... [other routes if any]

router.post('/v1/terminal/locations', controller.createLocation);
router.get('/v1/terminal/locations/:id', controller.getLocationById);
router.post('/v1/terminal/locations/:id', controller.updateLocation);
router.delete('/v1/terminal/locations/:id', controller.deleteLocation);
router.get('/v1/terminal/locations', controller.getAllLocations);

module.exports = router;
