const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.retrieveBalance = async (req, res) => {
    try {
        const balance = await stripe.balance.retrieve();
        res.json(balance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
