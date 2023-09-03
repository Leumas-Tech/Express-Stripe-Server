const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.retrieveDispute = async (req, res) => {
    try {
        const disputeId = req.params.id;
        const dispute = await stripe.disputes.retrieve(disputeId);
        res.json(dispute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateDispute = async (req, res) => {
    try {
        const disputeId = req.params.id;
        const updateData = req.body;
        const dispute = await stripe.disputes.update(disputeId, updateData);
        res.json(dispute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.closeDispute = async (req, res) => {
    try {
        const disputeId = req.params.id;
        const dispute = await stripe.disputes.close(disputeId);
        res.json(dispute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listDisputes = async (req, res) => {
    try {
        const { limit } = req.query;
        const disputes = await stripe.disputes.list({
            limit: limit || 10
        });
        res.json(disputes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
