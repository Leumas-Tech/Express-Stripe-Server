const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

// Existing controller functions...

exports.createAccountSession = async (req, res) => {
    try {
        const accountSession = await stripe.accountSessions.create(req.body);
        res.json(accountSession);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
