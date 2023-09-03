const express = require('express');
const router = express.Router();
const appSecretsController = require('./controllers');

// Create a secret
router.post('/v1/apps/secrets', appSecretsController.createSecret);

// Retrieve a specific secret by name and scope
router.get('/v1/apps/secrets/find', appSecretsController.findSecret);

// Delete a specific secret by name and scope
router.post('/v1/apps/secrets/delete', appSecretsController.deleteSecret);

// List all secrets by scope
router.get('/v1/apps/secrets', appSecretsController.listSecrets);

module.exports = router;
