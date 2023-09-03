const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createInboundTransfer = async (req, res) => {
    try {
        const { financial_account, amount, currency, origin_payment_method, description } = req.body;
        const inboundTransfer = await stripe.treasury.inboundTransfers.create({
            financial_account,
            amount,
            currency,
            origin_payment_method,
            description
        });
        res.json(inboundTransfer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.cancelInboundTransfer = async (req, res) => {
    try {
        const { id } = req.params;
        const inboundTransfer = await stripe.treasury.inboundTransfers.cancel(id);
        res.json(inboundTransfer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.retrieveInboundTransfer = async (req, res) => {
    try {
        const { id } = req.params;
        const inboundTransfer = await stripe.treasury.inboundTransfers.retrieve(id);
        res.json(inboundTransfer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.listInboundTransfers = async (req, res) => {
    try {
        const { financial_account, limit } = req.query;
        const inboundTransfers = await stripe.treasury.inboundTransfers.list({
            financial_account,
            limit
        });
        res.json(inboundTransfers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.failInboundTransfer = async (req, res) => {
    try {
        const { id } = req.params;
        const { failure_details } = req.body;
        const inboundTransfer = await stripe.testHelpers.treasury.inboundTransfers.fail(id, failure_details);
        res.json(inboundTransfer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.returnInboundTransfer = async (req, res) => {
    try {
        const { id } = req.params;
        const inboundTransfer = await stripe.testHelpers.treasury.inboundTransfers.return(id);
        res.json(inboundTransfer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.succeedInboundTransfer = async (req, res) => {
    try {
        const { id } = req.params;
        const inboundTransfer = await stripe.testHelpers.treasury.inboundTransfers.succeed(id);
        res.json(inboundTransfer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
