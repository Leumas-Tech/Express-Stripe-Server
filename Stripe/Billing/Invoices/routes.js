const express = require('express');
const router = express.Router();
const controller = require('./controllers');


const stripe = require('stripe')('YOUR_SECRET_KEY_HERE'); // replace with your secret key

// Create Invoice
router.post('/v1/invoices', controller.createInvoice );

// Retrieve Invoice
router.get('/v1/invoices/:id', controller.retrieveInvoice );

// Update Invoice
router.post('/v1/invoices/:id', controller.updateInvoice );

// Delete Invoice
router.delete('/v1/invoices/:id', controller.deleteInvoice );

// Finalize Invoice
router.post('/v1/invoices/:id/finalize', controller.finalizeInvoice );

// Pay Invoice
router.post('/v1/invoices/:id/pay', controller.payInvoice );

router.post('/v1/invoices/:id/send', controller.sendInvoice );

router.post('/v1/invoices/:id/void', controller.voidInvoice );

router.post('/v1/invoices/:id/mark-uncollectable', controller.markUncollectable );

router.get('/v1/invoices/:id/lines', controller.retrieveInvoiceLineItem );
router.get('/v1/invoices/upcoming', controller.upcomingInvoice );
router.get('/v1/invoices/upcoming/lines', controller.upcomingInvoiceLineItems );


// List all Invoices
router.get('/v1/invoices', controller.listAllInvoices );

// Search Invoices
router.get('/v1/invoices/search', controller.searchInvoices );

module.exports = router;



module.exports = router;
