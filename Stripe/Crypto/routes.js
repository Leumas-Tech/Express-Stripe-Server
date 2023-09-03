const express = require('express');
const router = express.Router();

const quoteRoutes = require("./Crypto-Onramp-Quotes/routes");
const sessionRoutes = require("./Crypto-Onramp-Sessions/routes")


router.use('/onramp-quotes', quoteRoutes);

router.use('/onramp-sessions', sessionRoutes);

module.exports = router;
