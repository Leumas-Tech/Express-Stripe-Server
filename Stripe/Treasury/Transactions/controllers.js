const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.retrieveTransaction = async (req, res) => {
    try {
        const transaction = await stripe.treasury.transactions.retrieve(req.params.id);
        res.json(transaction);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.listTransactions = async (req, res) => {
    try {
        const transactions = await stripe.treasury.transactions.list(req.body);
        res.json(transactions);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
