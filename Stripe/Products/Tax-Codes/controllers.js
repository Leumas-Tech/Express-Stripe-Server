const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.listTaxCodes = async (req, res) => {
    try {
        const { limit = 3 } = req.query; // Defaults to 3, but can be overridden by query parameter
        const taxCodes = await stripe.taxCodes.list({ limit: parseInt(limit) });
        res.json(taxCodes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTaxCode = async (req, res) => {
    try {
        const { id } = req.params;
        const taxCode = await stripe.taxCodes.retrieve(id);
        res.json(taxCode);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ... your other controllers ...
