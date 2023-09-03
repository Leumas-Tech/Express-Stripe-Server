const express = require('express');
const router = express.Router();
const controller = require('./controllers');


router.post('/preview', controller.previewCreditNote);

router.post('/create', controller.createCreditNote);

router.get('/:id', controller.retrieveCreditNote);

router.put('/update/:id', controller.updateCreditNote);

router.get('/retrieve/:id/line-items', controller.retrieveCreditNoteLineItems);

router.get('/retrieve-preview-line-items', controller.retrieveCreditNotePreviewLineItems);

router.delete('/:id/void', controller.voidCreditNote);

router.get('/list', controller.listAllCreditNotes);



module.exports = router;
