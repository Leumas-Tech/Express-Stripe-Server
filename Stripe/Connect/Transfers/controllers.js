const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createTransfer = async (req, res) => {
    try {
        const transfer = await stripe.transfers.create(req.body);
        res.json(transfer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveTransfer = async (req, res) => {
    try {
        const transfer = await stripe.transfers.retrieve(req.params.id);
        res.json(transfer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTransfer = async (req, res) => {
    try {
        const transfer = await stripe.transfers.update(req.params.id, req.body);
        res.json(transfer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listTransfers = async (req, res) => {
    try {
        const transfers = await stripe.transfers.list(req.query);
        res.json(transfers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

