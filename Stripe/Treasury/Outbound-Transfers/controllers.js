const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.createOutboundTransfer = async (req, res) => {
    try {
        const outboundTransfer = await stripe.treasury.outboundTransfers.create(req.body);
        res.json(outboundTransfer);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.cancelOutboundTransfer = async (req, res) => {
    try {
        const outboundTransfer = await stripe.treasury.outboundTransfers.cancel(req.params.id);
        res.json(outboundTransfer);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.retrieveOutboundTransfer = async (req, res) => {
    try {
        const outboundTransfer = await stripe.treasury.outboundTransfers.retrieve(req.params.id);
        res.json(outboundTransfer);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.listOutboundTransfers = async (req, res) => {
    try {
        const outboundTransfers = await stripe.treasury.outboundTransfers.list(req.body);
        res.json(outboundTransfers);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.postOutboundTransferTest = async (req, res) => {
    try {
        const outboundTransfer = await stripe.testHelpers.treasury.outboundTransfers.post(req.params.id);
        res.json(outboundTransfer);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.returnOutboundTransferTest = async (req, res) => {
    try {
        const outboundTransfer = await stripe.testHelpers.treasury.outboundTransfers.return(req.params.id, req.body);
        res.json(outboundTransfer);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.failOutboundTransferTest = async (req, res) => {
    try {
        const outboundTransfer = await stripe.testHelpers.treasury.outboundTransfers.fail(req.params.id);
        res.json(outboundTransfer);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
