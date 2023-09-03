const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createSubscriptionSchedule = async (req, res) => {
    try {
        const subscriptionSchedule = await stripe.subscriptionSchedules.create(req.body);
        res.json(subscriptionSchedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveSubscriptionSchedule = async (req, res) => {
    try {
        const subscriptionSchedule = await stripe.subscriptionSchedules.retrieve(req.params.id);
        res.json(subscriptionSchedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSubscriptionSchedule = async (req, res) => {
    try {
        const subscriptionSchedule = await stripe.subscriptionSchedules.update(req.params.id, req.body);
        res.json(subscriptionSchedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancelSubscriptionSchedule = async (req, res) => {
    try {
        const subscriptionSchedule = await stripe.subscriptionSchedules.cancel(req.params.id);
        res.json(subscriptionSchedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.releaseSubscriptionSchedule = async (req, res) => {
    try {
        const subscriptionSchedule = await stripe.subscriptionSchedules.release(req.params.id);
        res.json(subscriptionSchedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listSubscriptionSchedules = async (req, res) => {
    try {
        const subscriptionSchedules = await stripe.subscriptionSchedules.list(req.query);
        res.json(subscriptionSchedules);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
