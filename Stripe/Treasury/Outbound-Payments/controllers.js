const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.createOutboundPayment = async (req, res) => {
    try {
        const payment = await stripe.treasury.outboundPayments.create(req.body);
        res.json(payment);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.cancelOutboundPayment = async (req, res) => {
    try {
        const payment = await stripe.treasury.outboundPayments.cancel(req.params.id);
        res.json(payment);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.retrieveOutboundPayment = async (req, res) => {
    try {
        const payment = await stripe.treasury.outboundPayments.retrieve(req.params.id);
        res.json(payment);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.listOutboundPayments = async (req, res) => {
    try {
        const payments = await stripe.treasury.outboundPayments.list(req.query);
        res.json(payments);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.postTestHelperOutboundPayment = async (req, res) => {
    try {
        const payment = await stripe.testHelpers.treasury.outboundPayments.post(req.params.id);
        res.json(payment);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.returnTestHelperOutboundPayment = async (req, res) => {
    try {
        const payment = await stripe.testHelpers.treasury.outboundPayments.return(req.params.id, req.body);
        res.json(payment);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.failTestHelperOutboundPayment = async (req, res) => {
    try {
        const payment = await stripe.testHelpers.treasury.outboundPayments.fail(req.params.id);
        res.json(payment);
    } catch (error) {
        res.status(400).send(error);
    }
};
