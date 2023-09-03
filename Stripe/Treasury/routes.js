const express = require('express');
const router = express.Router();

const creditReversal = require("./Credit-Reversals/routes");
const debitReversal = require("./Debit-Reversals/routes");
const financialAccountFeatures = require("./Financial-Account-Features/routes");
const financialAccounts = require("./Financial-Accounts/routes");
const inboundTransfers = require("./Inbound-Transfers/routes");
const outboundPayments = require("./Outbound-Payments/routes");
const receivedCredits = require("./Received-Credits/routes");
const receivedDebits = require("./Received-Debits/routes");
const transactionEntries = require("./Transaction-Entries/routes");
const transactions = require("./Transactions/routes");



router.use('/credit-reversal', creditReversal);
router.use('/debit-reversal', debitReversal);
router.use('/financial-account-features', financialAccountFeatures);
router.use('/financial-accounts', financialAccounts);
router.use('/inbound-transfers', inboundTransfers);
router.use('/outbound-payments', outboundPayments);
router.use('/received-credits', receivedCredits);
router.use('/received-debits', receivedDebits);
router.use('/transaction-entries', transactionEntries);
router.use('/transactions', transactions);




module.exports = router;
