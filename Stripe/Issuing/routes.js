const express = require('express');
const router = express.Router();

const authorizationRoutes = require("./Auhtorizations/routes");
const carholderRoutes = require("./Cardholders/routes");
const cardRoutes = require("./Cards/routes");
const disputeRoutes = require("./Disputes/routes");
const fundingInstructionRoutes = require("./Funding-Instructions/routes");
const transactionRoutes = require("./Transactions/routes");

router.use('/authorizations', authorizationRoutes);
router.use('/cardholders', carholderRoutes);
router.use('/cards', cardRoutes);
router.use('/disputes', disputeRoutes);
router.use('/funding-instructions', fundingInstructionRoutes);
router.use('/transactions', transactionRoutes);


module.exports = router;
