const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createSubscription = async (req, res) => {
    try {
        const subscription = await stripe.subscriptions.create(req.body);
        res.json(subscription);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveSubscription = async (req, res) => {
    try {
        const subscription = await stripe.subscriptions.retrieve(req.params.id);
        res.json(subscription);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSubscription = async (req, res) => {
    try {
        const subscription = await stripe.subscriptions.update(req.params.id, req.body);
        res.json(subscription);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.resumeSubscription = async (req, res) => {
    try {
        const subscription = await stripe.subscriptions.resume(req.params.id, req.body);
        res.json(subscription);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancelSubscription = async (req, res) => {
    try {
        const deleted = await stripe.subscriptions.cancel(req.params.id);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listSubscriptions = async (req, res) => {
    try {
        const subscriptions = await stripe.subscriptions.list(req.query);
        res.json(subscriptions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.searchSubscriptions = async (req, res) => {
    try {
        const subscription = await stripe.subscriptions.search(req.query);
        res.json(subscription);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
