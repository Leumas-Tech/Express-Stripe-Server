const express = require('express');
const router = express.Router();

const coupons = require("./Coupons/routes");
const discounts = require("./Discounts/routes");
const prices = require("./Prices/routes");
const products = require("./Products/routes");
const promotionsCodes = require("./Promotion-Codes/routes");
const shippingRates = require("./Shipping-Rates/routes");
const taxCodes = require("./Tax-Codes/routes");
const taxRates = require("./Tax-Rates/routes");


router.use('/coupons', coupons);
router.use('/discounts', discounts);
router.use('/prices', prices);
router.use('/products', products);
router.use('/promotions-codes', promotionsCodes);
router.use('/shipping-rates', shippingRates);
router.use('/tax-codes', taxCodes);
router.use('/tax-rates', taxRates);




module.exports = router;
