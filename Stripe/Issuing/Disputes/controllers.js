const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.createDispute = async (req, res) => {
    try {
        const { transaction, evidence } = req.body;
        const dispute = await stripe.issuing.disputes.create({ transaction, evidence });
        res.json(dispute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.submitDispute = async (req, res) => {
    try {
        const disputeId = req.params.id;
        const dispute = await stripe.issuing.disputes.submit(disputeId);
        res.json(dispute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveDispute = async (req, res) => {
    try {
        const disputeId = req.params.id;
        const dispute = await stripe.issuing.disputes.retrieve(disputeId);
        res.json(dispute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateDispute = async (req, res) => {
    try {
        const disputeId = req.params.id;
        const { evidence } = req.body;
        const dispute = await stripe.issuing.disputes.update(disputeId, { evidence });
        res.json(dispute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listDisputes = async (req, res) => {
    try {
        const { limit } = req.query;  // Get limit from query parameters
        const disputes = await stripe.issuing.disputes.list({ limit: parseInt(limit) });
        res.json(disputes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
