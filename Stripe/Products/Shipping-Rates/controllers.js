const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createShippingRate = async (req, res) => {
    try {
        const { display_name, type, fixed_amount } = req.body;
        const shippingRate = await stripe.shippingRates.create({ display_name, type, fixed_amount });
        res.json(shippingRate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getShippingRate = async (req, res) => {
    try {
        const { id } = req.params;
        const shippingRate = await stripe.shippingRates.retrieve(id);
        res.json(shippingRate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateShippingRate = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body; // Get the update data from request body.
        const shippingRate = await stripe.shippingRates.update(id, updateData);
        res.json(shippingRate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listShippingRates = async (req, res) => {
    try {
        const shippingRates = await stripe.shippingRates.list({ limit: 3 }); // Allow customization on limit via query params, if needed.
        res.json(shippingRates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ... your other controllers ...
