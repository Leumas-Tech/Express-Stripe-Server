const express = require('express');
const router = express.Router();

const billingRoutes = require("./Billing/routes")
const checkoutRoutes = require("./Checkout/routes")
const connectRoutes = require("./Connect/routes")
const coreRoutes = require("./Core/routes")
const cryptoRoutes = require("./Crypto/routes")
const financialConnectionRoutes = require("./Financial-Connections/routes")
const fraudRoutes = require("./Fraud/routes")
const identityRoutes = require("./Identity/routes")
const issuingRoutes = require("./Issuing/routes")
const paymentLinkRoutes = require("./Payment-Links/routes")
const paymentMethodRoutes = require("./Payment-Methods/routes")
const productRoutes = require("./Products/routes")
const reportingRoutes = require("./Reporting/routes")
const sigmaRoutes = require("./Sigma/routes")
const taxRoutes = require("./Tax/routes")
const terminalRoutes = require("./Terminal/routes")
const treasuryRoutes = require("./Treasury/routes")
const webhookRoutes = require("./Webhooks/routes")



// Billing
router.use("/billing" , billingRoutes )

// Checkout
router.use("/checkout" , checkoutRoutes )

// Connect
router.use("/connect" , connectRoutes )

//Core
router.use("/core" , coreRoutes )

//Crypto
router.use("/crypto" , cryptoRoutes )

//Finaniclal Connections
router.use("/financial-connections" , financialConnectionRoutes )

// Fraud
router.use("/fraud" , fraudRoutes )

// Identity
router.use("/identity" , identityRoutes )

// Issuing
router.use("/issuing" , issuingRoutes )

// Payment Links
router.use("/payment-links" , paymentLinkRoutes )

// Payment Methods
router.use("/payment-methods" , paymentMethodRoutes )

// Products
router.use("/products" , productRoutes )

// Reporting
router.use("/reporting" , reportingRoutes )

// Sigma
router.use("/sigma" , sigmaRoutes )

// Tax
router.use("/tax" , taxRoutes )

// Terminal
router.use("/terminal" , terminalRoutes )

// Treasury
router.use("/treasury" , treasuryRoutes )

// Webhooks
router.use("/webhooks" , webhookRoutes )

module.exports = router;
