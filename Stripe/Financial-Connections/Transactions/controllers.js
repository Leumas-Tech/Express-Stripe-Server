const axios = require('axios');


const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.getTransactions = async (req, res) => {
    try {
        
        const response = await axios.get('https://api.stripe.com/v1/financial_connections/transactions', {
            headers: {
                'Authorization': `Bearer ${STRIPE_SECRET_KEY}`
            },
            params: {
                limit: 3
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
