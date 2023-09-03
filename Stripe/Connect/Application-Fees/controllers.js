const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.retrieveApplicationFee = async (req, res) => {
    try {
        const applicationFee = await stripe.applicationFees.retrieve(req.params.id);
        res.json(applicationFee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listApplicationFees = async (req, res) => {
    try {
        const applicationFees = await stripe.applicationFees.list(req.body);
        res.json(applicationFees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
