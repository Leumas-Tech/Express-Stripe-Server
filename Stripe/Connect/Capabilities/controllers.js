const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.retrieveCapability = async (req, res) => {
    try {
        const capability = await stripe.accounts.retrieveCapability(req.params.account_id, req.params.capability_id);
        res.json(capability);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCapability = async (req, res) => {
    try {
        const capability = await stripe.accounts.updateCapability(req.params.account_id, req.params.capability_id, req.body);
        res.json(capability);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listCapabilities = async (req, res) => {
    try {
        const capabilities = await stripe.accounts.listCapabilities(req.params.account_id);
        res.json(capabilities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
