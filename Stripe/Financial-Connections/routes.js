const express = require('express');
const router = express.Router();

const InferredBalanceRoutes = require("./Account-Inferred-Balances/routes");
const OwnerShipRoutes = require("./Account-Ownership/routes");
const AccountRoutes = require("./Accounts/routes");
const SessionRoutes = require("./Sessions/routes");
const TransactionRoutes = require("./Transactions/routes");



router.use('/account-inferred-balances', InferredBalanceRoutes);
router.use('/account-ownership', OwnerShipRoutes);
router.use('/accounts', AccountRoutes);
router.use('/sessions', SessionRoutes);
router.use('/transactions', TransactionRoutes);


module.exports = router;
