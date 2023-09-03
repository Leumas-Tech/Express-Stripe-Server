const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createAccount = async (req, res) => {
    try {
        const account = await stripe.accounts.create(req.body);
        res.json(account);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveAccount = async (req, res) => {
    try {
        const account = await stripe.accounts.retrieve(req.params.id);
        res.json(account);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAccount = async (req, res) => {
    try {
        const account = await stripe.accounts.update(req.params.id, req.body);
        res.json(account);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteAccount = async (req, res) => {
    try {
        const deleted = await stripe.accounts.del(req.params.id);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.rejectAccount = async (req, res) => {
    try {
        const account = await stripe.accounts.reject(req.params.id, req.body);
        res.json(account);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listAccounts = async (req, res) => {
    try {
        const accounts = await stripe.accounts.list(req.body);
        res.json(accounts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createLoginLink = async (req, res) => {
    try {
        const loginLink = await stripe.accounts.createLoginLink(req.params.id);
        res.json(loginLink);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
