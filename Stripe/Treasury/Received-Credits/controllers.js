const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.retrieveReceivedCredit = async (req, res) => {
    try {
        const receivedCredit = await stripe.treasury.receivedCredits.retrieve(req.params.id);
        res.json(receivedCredit);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.listReceivedCredits = async (req, res) => {
    try {
        const receivedCredits = await stripe.treasury.receivedCredits.list(req.body);
        res.json(receivedCredits);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.createReceivedCreditTest = async (req, res) => {
    try {
        const receivedCredit = await stripe.testHelpers.treasury.receivedCredits.create(req.body);
        res.json(receivedCredit);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
