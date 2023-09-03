const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.createWebhookEndpoint = async (req, res) => {
    try {
        const webhookEndpoint = await stripe.webhookEndpoints.create(req.body);
        res.json(webhookEndpoint);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.retrieveWebhookEndpoint = async (req, res) => {
    try {
        const webhookEndpoint = await stripe.webhookEndpoints.retrieve(req.params.id);
        res.json(webhookEndpoint);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateWebhookEndpoint = async (req, res) => {
    try {
        const webhookEndpoint = await stripe.webhookEndpoints.update(req.params.id, req.body);
        res.json(webhookEndpoint);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.listWebhookEndpoints = async (req, res) => {
    try {
        const webhookEndpoints = await stripe.webhookEndpoints.list(req.body);
        res.json(webhookEndpoints);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteWebhookEndpoint = async (req, res) => {
    try {
        const deleted = await stripe.webhookEndpoints.del(req.params.id);
        res.json(deleted);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
