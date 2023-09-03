const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Use the


exports.createBalanceTransaction = async (req, res) => {
    try {
        const balanceTransaction = await stripe.customers.createBalanceTransaction(
            req.params.customerId,
            req.body
        );
        res.json(balanceTransaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.retrieveBalanceTransaction = async (req, res) => {
    try {
        const balanceTransaction = await stripe.customers.retrieveBalanceTransaction(
            req.params.customerId,
            req.params.transactionId
        );
        res.json(balanceTransaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.updateBalanceTransaction = async (req, res) => {
    try {
        const balanceTransaction = await stripe.customers.updateBalanceTransaction(
            req.params.customerId,
            req.params.transactionId,
            req.body
        );
        res.json(balanceTransaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




exports.listBalanceTransactions = async (req, res) => {
    try {
        const balanceTransactions = await stripe.customers.listBalanceTransactions(
            req.params.customerId,
            req.query
        );
        res.json(balanceTransactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


