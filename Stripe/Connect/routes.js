const express = require('express');
const router = express.Router();

const accountLinkRoutes = require("./Account-Links/routes")
const accountSessionRoutes = require("./Account-Sessions/routes")
const accountRoutes = require("./Accounts/routes")

const applicationFeeRefundRoutes = require("./Application-Fee-Refunds/routes")
const applicationFeeRoutes = require("./Application-Fees/routes")
const capabilityRoutes = require("./Capabilities/routes")
const countrySpecRoutes = require("./Country-Specs/routes")
const externalAccountRoutes = require("./External-Accounts/routes")
const personRoutes = require("./Persons/routes")
const secretManagementRoutes = require("./Secret-Management/routes")
const topUpRoutes = require("./Top-Ups/routes")
const transferReversalRoutes = require("./Transfer-Reversals/routes")
const transferRoutes = require("./Transfers/routes")

router.use("/account-links" , accountLinkRoutes )
router.use("/account-sessions" , accountSessionRoutes )
router.use("/accounts" , accountRoutes )

router.use("/application-fee-refunds" , applicationFeeRefundRoutes )
router.use("/application-fees" , applicationFeeRoutes )
router.use("/capabilities" , capabilityRoutes )
router.use("/country-specs" , countrySpecRoutes )
router.use("/external-accounts" , externalAccountRoutes )
router.use("/persons" , personRoutes )
router.use("/secret-management" , secretManagementRoutes )
router.use("/top-ups" , topUpRoutes )
router.use("/transfer-reversals" , transferReversalRoutes )
router.use("/transfers" , transferRoutes )


module.exports = router;
