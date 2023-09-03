const express = require('express');
const router = express.Router();
const controller = require('./controllers');


router.post('/v1/create', controller.createInvoiceItem);

router.get('/v1/get/:invoiceItemId', controller.retrieveInvoiceItem);

router.post('/v1/update/:invoiceItemId', controller.updateInvoiceItem);

router.delete('/v1/delete/:invoiceItemId', controller.deleteInvoiceItem);

router.get('/v1/get-all', controller.listInvoiceItems);



module.exports = router;
