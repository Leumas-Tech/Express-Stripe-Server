const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.createSource = async (req, res) => {
    try {
        const { type, currency, owner } = req.body;
        const source = await stripe.sources.create({ type, currency, owner });
        res.json(source);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveSource = async (req, res) => {
    try {
        const { id } = req.params;
        const source = await stripe.sources.retrieve(id);
        res.json(source);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSource = async (req, res) => {
    try {
        const { id } = req.params;
        const { metadata } = req.body;
        const source = await stripe.sources.update(id, { metadata });
        res.json(source);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCustomerSource = async (req, res) => {
    try {
        const { id } = req.params;
        const { source } = req.body;
        const addedSource = await stripe.customers.createSource(id, { source });
        res.json(addedSource);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCustomerSource = async (req, res) => {
    try {
        const { id, sourceId } = req.params;
        const confirmation = await stripe.customers.deleteSource(id, sourceId);
        res.json(confirmation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ... your other controllers ...
