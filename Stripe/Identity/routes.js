const express = require('express');
const router = express.Router();

const reportRoutes = require("./Verification-Reports/routes");
const sessionRoutes = require("./Verification-Sessions/routes");

router.use('/reports', reportRoutes);

router.use('/sessions', sessionRoutes);

module.exports = router;
