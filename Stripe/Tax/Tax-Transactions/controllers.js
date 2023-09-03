const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createFromCalculation = async (req, res) => {
    try {
        const { calculation, reference, expand } = req.body;
        const transaction = await stripe.tax.transactions.createFromCalculation({
            calculation,
            reference,
            expand
        });
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createReversal = async (req, res) => {
    try {
        const { mode, original_transaction, reference, line_items, expand } = req.body;
        const transaction = await stripe.tax.transactions.createReversal({
            mode,
            original_transaction,
            reference,
            line_items,
            expand
        });
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await stripe.tax.transactions.retrieve(id);
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listTransactionLineItems = async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await stripe.tax.transactions.listLineItems(id);
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
