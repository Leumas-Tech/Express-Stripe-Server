const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.createTaxRate = async (req, res) => {
    try {
        const { display_name, description, jurisdiction, percentage, inclusive } = req.body;
        const taxRate = await stripe.taxRates.create({
            display_name,
            description,
            jurisdiction,
            percentage,
            inclusive
        });
        res.json(taxRate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTaxRate = async (req, res) => {
    try {
        const { id } = req.params;
        const taxRate = await stripe.taxRates.retrieve(id);
        res.json(taxRate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTaxRate = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const taxRate = await stripe.taxRates.update(id, updateData);
        res.json(taxRate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listTaxRates = async (req, res) => {
    try {
        const { limit = 3 } = req.query; // Defaults to 3, but can be overridden by query parameter
        const taxRates = await stripe.taxRates.list({ limit: parseInt(limit) });
        res.json(taxRates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
