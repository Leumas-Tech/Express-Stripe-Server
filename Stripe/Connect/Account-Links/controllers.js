const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

// Existing controller functions...

exports.createAccountLink = async (req, res) => {
    try {
        const accountLink = await stripe.accountLinks.create(req.body);
        res.json(accountLink);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
