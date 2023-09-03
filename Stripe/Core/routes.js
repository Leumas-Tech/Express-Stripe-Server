const express = require('express');
const router = express.Router();

const balanceRoutes = require("./Balance/routes");
const balanceTransactionRoutes = require("./Balance-Transactions/routes");
const chargeRoutes = require("./Charges/routes");
const customerRoutes = require("./Customers/routes")
const disputeRoutes = require("./Disputes/routes");
const eventRoutes = require("./Events/routes");
const fileLinkRoutes = require("./File-Links/routes");
const fileRoutes = require("./Files/routes");
const mandateRoutes = require("./Mandates/routes");
const paymentIntentRoutes = require("./Payment-Intents/routes");
const payoutRoutes = require("./Payouts/routes");
const refundRoutes = require("./Refunds/routes");
const setUpIntentRoutes = require("./Setup-Intents/routes");
const setUpAttemptRoutes = require("./Setup-Attempts/routes");
const tokenRoutes = require("./Tokens/routes");

router.use('/balance', balanceRoutes);
router.use('/balance-transactions', balanceTransactionRoutes);
router.use('/charges', chargeRoutes);
router.use('/customers', customerRoutes);
router.use('/disputes', disputeRoutes);
router.use('/events', eventRoutes);
router.use('/file-links', fileLinkRoutes);
router.use('/files', fileRoutes);
router.use('/mandates', mandateRoutes);
router.use('/payment-intents', paymentIntentRoutes);
router.use('/payouts', payoutRoutes);
router.use('/refunds', refundRoutes);
router.use('/setup-intents', setUpIntentRoutes);
router.use('/setup-attempt', setUpAttemptRoutes);
router.use('/tokens', tokenRoutes);

module.exports = router;
