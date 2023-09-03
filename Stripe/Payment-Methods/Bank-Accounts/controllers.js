const axios = require('axios');
const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');replace 'YOUR_SECRET_KEY' with your Stripe secret key

// ... your other controllers ...

exports.createCustomerSource = async (req, res) => {
    try {
        const { customerId, source } = req.body;

        const bankAccount = await stripe.customers.createSource(customerId, { source });

        res.json(bankAccount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveCustomerSource = async (req, res) => {
    try {
        const { customerId, sourceId } = req.params;

        const bankAccount = await stripe.customers.retrieveSource(customerId, sourceId);

        res.json(bankAccount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCustomerSource = async (req, res) => {
    try {
        const { customerId, sourceId } = req.params;
        const { metadata } = req.body;

        const bankAccount = await stripe.customers.updateSource(customerId, sourceId, { metadata });

        res.json(bankAccount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.verifyCustomerSource = async (req, res) => {
    try {
        const { customerId, sourceId } = req.params;
        const { amounts } = req.body;

        const bankAccount = await stripe.customers.verifySource(customerId, sourceId, { amounts });

        res.json(bankAccount);
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

        const bankAccounts = await stripe.customers.listSources(customerId, { object: 'bank_account', limit });

        res.json(bankAccounts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
