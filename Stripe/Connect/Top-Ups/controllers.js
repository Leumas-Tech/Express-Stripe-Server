const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createTopup = async (req, res) => {
    try {
        const topup = await stripe.topups.create(req.body);
        res.json(topup);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveTopup = async (req, res) => {
    try {
        const topup = await stripe.topups.retrieve(req.params.id);
        res.json(topup);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTopup = async (req, res) => {
    try {
        const topup = await stripe.topups.update(req.params.id, req.body);
        res.json(topup);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listTopups = async (req, res) => {
    try {
        const topups = await stripe.topups.list(req.query);
        res.json(topups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancelTopup = async (req, res) => {
    try {
        const topup = await stripe.topups.cancel(req.params.id);
        res.json(topup);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

