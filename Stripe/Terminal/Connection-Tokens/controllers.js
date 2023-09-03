const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.createConnectionToken = async (req, res) => {
    try {
        const connectionToken = await stripe.terminal.connectionTokens.create();
        res.json(connectionToken);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
