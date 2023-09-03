const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
exports.createRefund = async (req, res) => {
    try {
        const refund = await stripe.refunds.create({ charge: req.body.charge });  // assuming charge id passed in body
        res.json(refund);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveRefund = async (req, res) => {
    try {
        const refund = await stripe.refunds.retrieve(req.params.id);
        res.json(refund);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateRefund = async (req, res) => {
    try {
        const refund = await stripe.refunds.update(req.params.id, {metadata: req.body.metadata});  // assuming metadata passed in body
        res.json(refund);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancelRefund = async (req, res) => {
    try {
        // Note: As of my last update, Stripe doesn't offer a direct method to cancel a refund. 
        // You may need to double-check this with the Stripe documentation or ensure this functionality through some other means.
        res.status(400).json({ message: "Cancellation of refunds is not supported by Stripe." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listRefunds = async (req, res) => {
    try {
        const refunds = await stripe.refunds.list(req.query);
        res.json(refunds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
