const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.retrieveCustomerCashBalance = async (req, res) => {
    try {
        const { customerId } = req.params;

        const cashBalance = await stripe.customers.retrieveCashBalance(customerId);
        res.json(cashBalance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCustomerCashBalance = async (req, res) => {
    try {
        const { customerId } = req.params;
        const { settings } = req.body;

        const cashBalance = await stripe.customers.updateCashBalance(customerId, { settings });
        res.json(cashBalance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveCustomerCashBalanceTransaction = async (req, res) => {
    try {
        const { customerId, transactionId } = req.params;

        const cashBalanceTransaction = await stripe.customers.retrieveCashBalanceTransaction(customerId, transactionId);
        res.json(cashBalanceTransaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listCustomerCashBalanceTransactions = async (req, res) => {
    try {
        const { customerId } = req.params;
        const { limit } = req.query;

        const cashBalanceTransactions = await stripe.customers.listCashBalanceTransactions(customerId, { limit });
        res.json(cashBalanceTransactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.fundCustomerCashBalance = async (req, res) => {
    try {
        const { customerId } = req.params;
        const { amount, currency } = req.body;

        const customer = await stripe.testHelpers.customers.fundCashBalance(customerId, { amount, currency });
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ... your other controllers ...
