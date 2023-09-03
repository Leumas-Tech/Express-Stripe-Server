const express = require('express');
const router = express.Router();

const earlyFraudWarningRoutes = require("./Early-Fraud-Warnings/routes");
const reviewRoutes = require("./Reviews/routes");
const valueListRoutes = require("./Value-Lists/routes");
const valueListItemsRoutes = require("./Value-List-Items/routes");



router.use('/early-fraud-warning', earlyFraudWarningRoutes);
router.use('/reviews', reviewRoutes);
router.use('/value-lists', valueListRoutes);
router.use('/value-list-items', valueListItemsRoutes);



module.exports = router;
