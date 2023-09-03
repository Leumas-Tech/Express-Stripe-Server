const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createFeeRefund = async (req, res) => {
    try {
        const feeRefund = await stripe.applicationFees.createRefund(req.params.fee_id);
        res.json(feeRefund);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveFeeRefund = async (req, res) => {
    try {
        const feeRefund = await stripe.applicationFees.retrieveRefund(req.params.fee_id, req.params.refund_id);
        res.json(feeRefund);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateFeeRefund = async (req, res) => {
    try {
        const feeRefund = await stripe.applicationFees.updateRefund(req.params.fee_id, req.params.refund_id, req.body);
        res.json(feeRefund);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listFeeRefunds = async (req, res) => {
    try {
        const feeRefunds = await stripe.applicationFees.listRefunds(req.params.fee_id, req.body);
        res.json(feeRefunds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
