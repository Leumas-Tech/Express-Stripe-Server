const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createPayout = async (req, res) => {
    try {
        const payout = await stripe.payouts.create(req.body);  // assuming amount and currency passed in body
        res.json(payout);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrievePayout = async (req, res) => {
    try {
        const payout = await stripe.payouts.retrieve(req.params.id);
        res.json(payout);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePayout = async (req, res) => {
    try {
        const payout = await stripe.payouts.update(req.params.id, req.body);  // assuming metadata passed in body
        res.json(payout);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listPayouts = async (req, res) => {
    try {
        const payouts = await stripe.payouts.list(req.query);
        res.json(payouts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancelPayout = async (req, res) => {
    try {
        const payout = await stripe.payouts.cancel(req.params.id);
        res.json(payout);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.reversePayout = async (req, res) => {
    try {
        const payout = await stripe.payouts.reverse(req.params.id);
        res.json(payout);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
