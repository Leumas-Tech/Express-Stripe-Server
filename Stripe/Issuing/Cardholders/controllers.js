const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.createCardholder = async (req, res) => {
    try {
        const data = req.body;
        const cardholder = await stripe.issuing.cardholders.create(data);
        res.json(cardholder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveCardholder = async (req, res) => {
    try {
        const cardholderId = req.params.id;
        const cardholder = await stripe.issuing.cardholders.retrieve(cardholderId);
        res.json(cardholder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCardholder = async (req, res) => {
    try {
        const cardholderId = req.params.id;
        const data = req.body;
        const updatedCardholder = await stripe.issuing.cardholders.update(cardholderId, data);
        res.json(updatedCardholder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listCardholders = async (req, res) => {
    try {
        const { limit } = req.query;
        const cardholders = await stripe.issuing.cardholders.list({
            limit: parseInt(limit) || 3
        });
        res.json(cardholders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
