const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Create a person
router.post('/v1/accounts/:accountId/persons', controller.createPerson);

// Retrieve a specific person
router.get('/v1/accounts/:accountId/persons/:personId', controller.retrievePerson);

// Update a specific person
router.post('/v1/accounts/:accountId/persons/:personId', controller.updatePerson);

// Delete a specific person
router.delete('/v1/accounts/:accountId/persons/:personId', controller.deletePerson);

// List all persons
router.get('/v1/accounts/:accountId/persons', controller.listPersons);

module.exports = router;
