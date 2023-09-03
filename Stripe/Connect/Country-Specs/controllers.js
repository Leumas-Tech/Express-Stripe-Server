const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.listCountrySpecs = async (req, res) => {
    try {
        const countrySpecs = await stripe.countrySpecs.list(req.query);
        res.json(countrySpecs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveCountrySpec = async (req, res) => {
    try {
        const countrySpec = await stripe.countrySpecs.retrieve(req.params.id);
        res.json(countrySpec);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
