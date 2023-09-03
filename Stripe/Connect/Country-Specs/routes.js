const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/country_specs', controller.listCountrySpecs);
router.get('/v1/country_specs/:id', controller.retrieveCountrySpec);

module.exports = router;
