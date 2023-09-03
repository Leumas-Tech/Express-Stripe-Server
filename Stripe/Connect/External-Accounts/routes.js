const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Create external account (bank/card)
router.post('/v1/accounts/:id/external_accounts', controller.createExternalAccount);

// Retrieve specific external account (bank/card)
router.get('/v1/accounts/:id/external_accounts/:extId', controller.retrieveExternalAccount);

// Update specific external account (bank/card)
router.post('/v1/accounts/:id/external_accounts/:extId', controller.updateExternalAccount);

// Delete specific external account (bank/card)
router.delete('/v1/accounts/:id/external_accounts/:extId', controller.deleteExternalAccount);

// List bank accounts
router.get('/v1/accounts/:id/external_accounts', controller.listBankAccounts);


// Create a card as an external account
router.post('/v1/accounts/:accountId/cards', controller.createCard);

// Retrieve a specific card
router.get('/v1/accounts/:accountId/cards/:cardId', controller.retrieveCard);

// Update a specific card
router.put('/v1/accounts/:accountId/cards/:cardId', controller.updateCard);

// Delete a specific card
router.delete('/v1/accounts/:accountId/cards/:cardId', controller.deleteCard);

// List cards
router.get('/v1/accounts/:id/external_accounts', controller.listCards);

module.exports = router;
