const axios = require('axios');
const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createPaymentLink = async (req, res) => {
    try {
        const { line_items } = req.body;

        const paymentLink = await stripe.paymentLinks.create({ line_items });
        
        res.json(paymentLink);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrievePaymentLink = async (req, res) => {
    try {
        const { id } = req.params;

        const paymentLink = await stripe.paymentLinks.retrieve(id);
        
        res.json(paymentLink);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePaymentLink = async (req, res) => {
    try {
        const { id } = req.params;
        const { active } = req.body;

        const paymentLink = await stripe.paymentLinks.update(id, { active });
        
        res.json(paymentLink);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listPaymentLinks = async (req, res) => {
    try {
        const { limit } = req.query;

        const paymentLinks = await stripe.paymentLinks.list({ limit });

        res.json(paymentLinks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listLineItemsPaymentLink = async (req, res) => {
    try {
        const { id } = req.params;
        const { limit } = req.query;

        // As of my last update (September 2021), the Stripe npm package does not support listing line items for payment links.
        // Therefore, we need to use axios for this endpoint as if it's a curl request.
        const response = await axios.get(`https://api.stripe.com/v1/payment_links/${id}/line_items`, {
            params: { limit },
            headers: {
                'Authorization': `Bearer YOUR_SECRET_KEY`  // replace 'YOUR_SECRET_KEY' with your Stripe secret key
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
