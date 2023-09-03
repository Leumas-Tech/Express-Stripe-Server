const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.retrieveMandate = async (req, res) => {
    try {
        const mandateId = req.params.id;
        const mandate = await stripe.mandates.retrieve(mandateId);
        res.json(mandate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
