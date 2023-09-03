const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.createPaymentMethod = async (req, res) => {
    try {
        const { type, card } = req.body;
        const paymentMethod = await stripe.paymentMethods.create({ type, card });
        res.json(paymentMethod);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrievePaymentMethod = async (req, res) => {
    try {
        const { id } = req.params;
        const paymentMethod = await stripe.paymentMethods.retrieve(id);
        res.json(paymentMethod);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveCustomerPaymentMethod = async (req, res) => {
    try {
        const { customer, payment_method } = req.params;
        const paymentMethod = await stripe.customers.retrievePaymentMethod(customer, payment_method);
        res.json(paymentMethod);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePaymentMethod = async (req, res) => {
    try {
        const { id } = req.params;
        const { metadata } = req.body;
        const paymentMethod = await stripe.paymentMethods.update(id, { metadata });
        res.json(paymentMethod);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listAllPaymentMethods = async (req, res) => {
    try {
        const paymentMethods = await stripe.paymentMethods.list(req.body);
        res.json(paymentMethods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listCustomerPaymentMethods = async (req, res) => {
    try {
        const { customer } = req.params;
        const { type } = req.query;
        const paymentMethods = await stripe.customers.listPaymentMethods(customer, { type });
        res.json(paymentMethods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.attachPaymentMethod = async (req, res) => {
    try {
        const { id } = req.params;
        const { customer } = req.body;
        const paymentMethod = await stripe.paymentMethods.attach(id, { customer });
        res.json(paymentMethod);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.detachPaymentMethod = async (req, res) => {
    try {
        const { id } = req.params;
        const paymentMethod = await stripe.paymentMethods.detach(id);
        res.json(paymentMethod);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ... your other controllers ...
