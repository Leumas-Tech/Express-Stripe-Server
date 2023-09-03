const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createCharge = async (req, res) => {
    try {
        const { amount, currency, source, description } = req.body;
        const charge = await stripe.charges.create({ amount, currency, source, description });
        res.json(charge);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveCharge = async (req, res) => {
    try {
        const chargeId = req.params.id;
        const charge = await stripe.charges.retrieve(chargeId);
        res.json(charge);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCharge = async (req, res) => {
    try {
        const chargeId = req.params.id;
        const updateData = req.body; // Example: metadata
        const charge = await stripe.charges.update(chargeId, updateData);
        res.json(charge);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.captureCharge = async (req, res) => {
    try {
        const chargeId = req.params.id;
        const charge = await stripe.charges.capture(chargeId);
        res.json(charge);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listCharges = async (req, res) => {
    try {
        const { limit } = req.query;
        const charges = await stripe.charges.list({
            limit: limit || 10 // Default to 10 if not provided
        });
        res.json(charges);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.searchCharges = async (req, res) => {
    try {
        const { query } = req.query;
        const charges = await stripe.charges.search({ query });
        res.json(charges);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
