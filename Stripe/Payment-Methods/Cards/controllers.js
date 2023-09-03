const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createCustomerSource = async (req, res) => {
    try {
        const { customerId } = req.params;
        const { source } = req.body;

        const card = await stripe.customers.createSource(customerId, { source });
        res.json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveCustomerSource = async (req, res) => {
    try {
        const { customerId, sourceId } = req.params;

        const card = await stripe.customers.retrieveSource(customerId, sourceId);
        res.json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCustomerSource = async (req, res) => {
    try {
        const { customerId, sourceId } = req.params;
        const { name } = req.body; // Only the 'name' parameter is provided in the example, but you can expand as needed

        const card = await stripe.customers.updateSource(customerId, sourceId, { name });
        res.json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCustomerSource = async (req, res) => {
    try {
        const { customerId, sourceId } = req.params;

        const deleted = await stripe.customers.deleteSource(customerId, sourceId);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listCustomerSources = async (req, res) => {
    try {
        const { customerId } = req.params;
        const { limit } = req.query;

        const cards = await stripe.customers.listSources(customerId, { object: 'card', limit });
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ... your other controllers ...
