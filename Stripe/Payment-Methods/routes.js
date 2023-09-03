const express = require('express');
const router = express.Router();

const bankAccountRoutes = require("./Bank-Accounts/routes");
const cardRoutes = require("./Cards/routes");
const cashbalanceRoutes = require("./Cash -Balance/routes");
const paymentMethodRoutes = require("./Payment-Methods/routes");
const sourceRoutes = require("./Sources/routes");


router.use('/bank-accounts', bankAccountRoutes);
router.use('/cards', cardRoutes);
router.use('/cash-balance', cashbalanceRoutes);
router.use('/payment-methods', paymentMethodRoutes);
router.use('/sources', sourceRoutes);


module.exports = router;
