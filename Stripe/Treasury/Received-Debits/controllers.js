const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.retrieveReceivedDebit = async (req, res) => {
    try {
        const receivedDebit = await stripe.treasury.receivedDebits.retrieve(req.params.id);
        res.json(receivedDebit);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.listReceivedDebits = async (req, res) => {
    try {
        const receivedDebits = await stripe.treasury.receivedDebits.list(req.body);
        res.json(receivedDebits);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.createReceivedDebitTest = async (req, res) => {
    try {
        const receivedDebit = await stripe.testHelpers.treasury.receivedDebits.create(req.body);
        res.json(receivedDebit);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
