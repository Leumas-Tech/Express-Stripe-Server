const express = require('express');
const router = express.Router();

const configurations = require("./Configurations/routes");
const connectionTokens = require("./Connection-Tokens/routes");
const hardwareOrders = require("./Hardware-Orders/routes");
const hardwareProducts = require("./Hardware-Products/routes");
const hardwareShippingMethods = require("./Hardware-Shipping-Methods/routes");
const hardwareSKUs = require("./Hardware-SKUs/routes");
const Locations = require("./Locations/routes");
const Readers = require("./Readers/routes");

router.use('/configurations', configurations);
router.use('/connectionTokens', connectionTokens);
router.use('/hardwareOrders', hardwareOrders);
router.use('/hardwareProducts', hardwareProducts);
router.use('/hardwareShippingMethods', hardwareShippingMethods);
router.use('/hardwareSKUs', hardwareSKUs);
router.use('/Locations', Locations);
router.use('/Readers', Readers);


module.exports = router;
