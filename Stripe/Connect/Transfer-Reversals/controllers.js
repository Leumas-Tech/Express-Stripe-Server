const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createReversal = async (req, res) => {
    try {
        const reversal = await stripe.transfers.createReversal(req.params.transferId, req.body);
        res.json(reversal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveReversal = async (req, res) => {
    try {
        const reversal = await stripe.transfers.retrieveReversal(req.params.transferId, req.params.reversalId);
        res.json(reversal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateReversal = async (req, res) => {
    try {
        const reversal = await stripe.transfers.updateReversal(req.params.transferId, req.params.reversalId, req.body);
        res.json(reversal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listReversals = async (req, res) => {
    try {
        const reversals = await stripe.transfers.listReversals(req.params.transferId, req.query);
        res.json(reversals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

