const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createExternalAccount = async (req, res) => {
    try {
        const externalAccount = await stripe.accounts.createExternalAccount(req.params.id, req.body);
        res.json(externalAccount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveExternalAccount = async (req, res) => {
    try {
        const externalAccount = await stripe.accounts.retrieveExternalAccount(req.params.id, req.params.extId);
        res.json(externalAccount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateExternalAccount = async (req, res) => {
    try {
        const updatedAccount = await stripe.accounts.updateExternalAccount(req.params.id, req.params.extId, req.body);
        res.json(updatedAccount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteExternalAccount = async (req, res) => {
    try {
        const deleted = await stripe.accounts.deleteExternalAccount(req.params.id, req.params.extId);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listBankAccounts = async (req, res) => {
    try {
        const bankAccounts = await stripe.accounts.listExternalAccounts(req.params.id, { object: 'bank_account', ...req.query });
        res.json(bankAccounts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listCards = async (req, res) => {
    try {
        const cards = await stripe.accounts.listExternalAccounts(req.params.id, { object: 'card', ...req.query });
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCard = async (req, res) => {
    try {
        const card = await stripe.accounts.createExternalAccount(req.params.accountId, req.body);
        res.json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveCard = async (req, res) => {
    try {
        const card = await stripe.accounts.retrieveExternalAccount(req.params.accountId, req.params.cardId);
        res.json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCard = async (req, res) => {
    try {
        const updatedCard = await stripe.accounts.updateExternalAccount(req.params.accountId, req.params.cardId, req.body);
        res.json(updatedCard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCard = async (req, res) => {
    try {
        const deletedCard = await stripe.accounts.deleteExternalAccount(req.params.accountId, req.params.cardId);
        res.json(deletedCard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};