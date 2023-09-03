const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createSetupIntent = async (req, res) => {
    try {
        const setupIntent = await stripe.setupIntents.create(req.body);
        res.json(setupIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveSetupIntent = async (req, res) => {
    try {
        const setupIntent = await stripe.setupIntents.retrieve(req.params.id);
        res.json(setupIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSetupIntent = async (req, res) => {
    try {
        const setupIntent = await stripe.setupIntents.update(req.params.id, req.body);
        res.json(setupIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.confirmSetupIntent = async (req, res) => {
    try {
        const setupIntent = await stripe.setupIntents.confirm(req.params.id, req.body);
        res.json(setupIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancelSetupIntent = async (req, res) => {
    try {
        const setupIntent = await stripe.setupIntents.cancel(req.params.id);
        res.json(setupIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listSetupIntents = async (req, res) => {
    try {
        const setupIntents = await stripe.setupIntents.list(req.query);
        res.json(setupIntents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.verifyMicrodeposits = async (req, res) => {
    try {
        const setupIntent = await stripe.setupIntents.verifyMicrodeposits(req.params.id, req.body);
        res.json(setupIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
