const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createUsageRecord = async (req, res) => {
    try {
        const usageRecord = await stripe.subscriptionItems.createUsageRecord(req.params.id, req.body);
        res.json(usageRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listUsageRecordSummaries = async (req, res) => {
    try {
        const usageRecordSummaries = await stripe.subscriptionItems.listUsageRecordSummaries(req.params.id, req.query);
        res.json(usageRecordSummaries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
