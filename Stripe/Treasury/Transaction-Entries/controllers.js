const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.retrieveTransactionEntry = async (req, res) => {
    try {
        const transactionEntry = await stripe.treasury.transactionEntries.retrieve(req.params.id);
        res.json(transactionEntry);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.listTransactionEntries = async (req, res) => {
    try {
        const transactionEntries = await stripe.treasury.transactionEntries.list(req.body);
        res.json(transactionEntries);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
