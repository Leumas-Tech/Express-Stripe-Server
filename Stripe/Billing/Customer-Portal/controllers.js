const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Use t

exports.createPortalSession = async (req, res) => {
    try {
        const session = await stripe.billingPortal.sessions.create(req.body);
        res.json(session);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.createPortalConfiguration = async (req, res) => {
    try {
        const configuration = await stripe.billingPortal.configurations.create(req.body);
        res.json(configuration);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updatePortalConfiguration = async (req, res) => {
    try {
        const configuration = await stripe.billingPortal.configurations.update(
            req.params.configId,
            req.body
        );
        res.json(configuration);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.retrievePortalConfiguration = async (req, res) => {
    try {
        const configuration = await stripe.billingPortal.configurations.retrieve(req.params.configId);
        res.json(configuration);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.listPortalConfigurations = async (req, res) => {
    try {
        const configurations = await stripe.billingPortal.configurations.list(req.query);
        res.json(configurations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
