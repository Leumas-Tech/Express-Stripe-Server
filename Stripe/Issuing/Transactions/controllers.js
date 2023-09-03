const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
const axios = require("axios")

exports.retrieveTransaction = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await axios.get(`https://api.stripe.com/v1/issuing/transactions/${id}`, {
            headers: {
                'Authorization': `Bearer ${STRIPE_SECRET_KEY}` // replace 'YOUR_SECRET_KEY' with your Stripe secret key or use process.env
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const { metadata } = req.body;

        const response = await axios.post(`https://api.stripe.com/v1/issuing/transactions/${id}`, {
            metadata
        }, {
            headers: {
                'Authorization': `Bearer ${STRIPE_SECRET_KEY}`
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listTransactions = async (req, res) => {
    try {
        const { limit } = req.query;

        const response = await axios.get('https://api.stripe.com/v1/issuing/transactions', {
            params: { limit },
            headers: {
                'Authorization': `Bearer ${STRIPE_SECRET_KEY}`
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};