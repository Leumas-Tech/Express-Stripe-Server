
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.listSetupAttempts = async (req, res) => {
    try {
        const setupAttempts = await stripe.setupAttempts.list({
            setup_intent: req.query.setup_intent
        });
        res.json(setupAttempts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
