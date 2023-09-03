const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createCheckoutSession = async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create(req.body);
        res.json(session);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.expireCheckoutSession = async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.expire(req.params.id);
        res.json(session);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveCheckoutSession = async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.retrieve(req.params.id);
        res.json(session);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listCheckoutSessions = async (req, res) => {
    try {
        const sessions = await stripe.checkout.sessions.list(req.query);
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listCheckoutSessionLineItems = async (req, res) => {
    try {
        const lineItems = await stripe.checkout.sessions.listLineItems(req.params.id, req.query);
        res.json(lineItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
