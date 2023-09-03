const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.retrieveBalanceTransaction = async (req, res) => {
    try {
        const transactionId = req.params.id;
        const balanceTransaction = await stripe.balanceTransactions.retrieve(transactionId);
        res.json(balanceTransaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listBalanceTransactions = async (req, res) => {
    try {
        const { limit } = req.query;
        const balanceTransactions = await stripe.balanceTransactions.list({
            limit: limit || 10 // Default to 10 if not provided
        });
        res.json(balanceTransactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
