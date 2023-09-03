const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.getEarlyFraudWarningById = async (req, res) => {
    try {
        const warningId = req.params.id;
        const earlyFraudWarning = await stripe.radar.earlyFraudWarnings.retrieve(warningId);
        res.json(earlyFraudWarning);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllEarlyFraudWarnings = async (req, res) => {
    try {
        const earlyFraudWarnings = await stripe.radar.earlyFraudWarnings.list({
            limit: 3
        });
        res.json(earlyFraudWarnings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
