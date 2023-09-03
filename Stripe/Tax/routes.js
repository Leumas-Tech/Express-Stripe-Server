const express = require('express');
const router = express.Router();

const calculations = require("./Tax-Calculations/routes");
const settings = require("./Tax-Settings/routes");
const transactions = require("./Tax-Transactions/routes");

router.use('/calculations', calculations);
router.use('/settings', settings);
router.use('/transactions', transactions);




module.exports = router;
