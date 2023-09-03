const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createSecret = async (req, res) => {
    try {
        const secret = await stripe.apps.secrets.create(req.body);
        res.json(secret);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findSecret = async (req, res) => {
    try {
        const secret = await stripe.apps.secrets.find(req.query);
        res.json(secret);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteSecret = async (req, res) => {
    try {
        const secret = await stripe.apps.secrets.deleteWhere(req.body);
        res.json(secret);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listSecrets = async (req, res) => {
    try {
        const secrets = await stripe.apps.secrets.list(req.query);
        res.json(secrets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

