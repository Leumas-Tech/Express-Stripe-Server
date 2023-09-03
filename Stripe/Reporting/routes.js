const express = require('express');
const router = express.Router();

const runs = require("./Report-Runs/routes");
const types = require("./Report-Types/routes");


router.use('/runs', runs);

router.use('/types', types);


module.exports = router;
