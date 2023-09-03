const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createPlan = async (req, res) => {
    const { amount, currency, interval, product } = req.body;
    try {
        const plan = await stripe.plans.create({ amount, currency, interval, product });
        res.json(plan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPlan = async (req, res) => {
    const { id } = req.params;
    try {
        const plan = await stripe.plans.retrieve(id);
        res.json(plan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePlan = async (req, res) => {
    const { id } = req.params;
    const { metadata } = req.body;
    try {
        const plan = await stripe.plans.update(id, { metadata });
        res.json(plan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deletePlan = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await stripe.plans.del(id);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listPlans = async (req, res) => {
    const { limit } = req.query;
    try {
        const plans = await stripe.plans.list({ limit });
        res.json(plans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
