const express = require('express');
const router = express.Router();

const credNoteRoutes = require("./Credit-Notes/routes")
const customerBalanceTransactionRoutes = require("./Customer-Balance-Transactions/routes")
const CustomerPortalRoutes = require("./Customer-Portal/routes")
const CustomerTaxIDsRoutes = require("./Customer-Tax-IDS/routes")
const InvoiceItemsRoutes = require("./Invoice-Items/routes")
const InvoicesRoutes = require("./Invoices/routes")
const PlansRoutes = require("./Plans/routes")
const QuotesRoutes = require("./Quotes/routes")
const SubscriptionItemsRoutes = require("./Subscription-Items/routes")
const SubscriptionsRoutes = require("./Subscriptions/routes")
const subscriptionSchedulesRoutes = require("./Subscription-Schedules/routes")
const TestClocksRoutes = require("./Test-Clocks/routes")
const UsageRecordRoutes = require("./Usage-Records/routes")




// Billing

router.use("/credit-notes" , credNoteRoutes )
router.use("/customer-balance" , customerBalanceTransactionRoutes )
router.use("/customer-portal" , CustomerPortalRoutes )
router.use("/customer-tax-ids" , CustomerTaxIDsRoutes )
router.use("/invoices" , InvoicesRoutes )
router.use("/invoice-items" , InvoiceItemsRoutes )
router.use("/plans" , PlansRoutes )
router.use("/quotes" , QuotesRoutes )
router.use("/subscriptions" , SubscriptionsRoutes )
router.use("/subscription-items" , SubscriptionItemsRoutes )
router.use("/subscription-schedules" , subscriptionSchedulesRoutes )
router.use("/test-clocks" , TestClocksRoutes )
router.use("/usage-records" , UsageRecordRoutes )





module.exports = router;
