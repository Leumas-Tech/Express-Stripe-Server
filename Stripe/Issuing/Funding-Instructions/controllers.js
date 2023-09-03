const axios = require('axios');

const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
// ... your other controllers ...

exports.createFundingInstructions = async (req, res) => {
    try {
        const { currency, funding_type, bank_transfer } = req.body;

        const response = await axios.post('https://api.stripe.com/v1/issuing/funding_instructions', {
            currency,
            funding_type,
            bank_transfer
        }, {
            headers: {
                'Authorization': `Bearer ${STRIPE_SECRET_KEY}` // replace 'YOUR_SECRET_KEY' with your Stripe secret key or use process.env
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listFundingInstructions = async (req, res) => {
    try {
        const { limit } = req.query;

        const response = await axios.get('https://api.stripe.com/v1/issuing/funding_instructions', {
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

exports.fundBalance = async (req, res) => {
    try {
        const { amount, currency } = req.body;

        const response = await axios.post('https://api.stripe.com/v1/test_helpers/issuing/fund_balance', {
            amount,
            currency
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
