const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.deleteCustomerDiscount = async (req, res) => {
    try {
        const { id } = req.params;
        const confirmation = await stripe.customers.deleteDiscount(id);
        res.json(confirmation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteSubscriptionDiscount = async (req, res) => {
    try {
        const { id } = req.params;
        const confirmation = await stripe.subscriptions.deleteDiscount(id);
        res.json(confirmation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ... your other controllers ...
