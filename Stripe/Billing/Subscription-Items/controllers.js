const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createSubscriptionItem = async (req, res) => {
    try {
        const subscriptionItem = await stripe.subscriptionItems.create(req.body);
        res.json(subscriptionItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveSubscriptionItem = async (req, res) => {
    try {
        const subscriptionItem = await stripe.subscriptionItems.retrieve(req.params.id);
        res.json(subscriptionItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSubscriptionItem = async (req, res) => {
    try {
        const subscriptionItem = await stripe.subscriptionItems.update(req.params.id, req.body);
        res.json(subscriptionItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteSubscriptionItem = async (req, res) => {
    try {
        const deleted = await stripe.subscriptionItems.del(req.params.id); // Note: Stripe uses 'del' method name for deletion.
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listSubscriptionItems = async (req, res) => {
    try {
        const subscriptionItems = await stripe.subscriptionItems.list(req.query);
        res.json(subscriptionItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
