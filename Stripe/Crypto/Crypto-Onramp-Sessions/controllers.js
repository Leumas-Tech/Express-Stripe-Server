const axios = require('axios');
const STRIPE_SECRET_KEY = `${process.env_STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

const STRIPE_BASE_URL = 'https://api.stripe.com/v1/crypto';

axios.defaults.headers.common['Authorization'] = `Bearer ${STRIPE_SECRET_KEY}`;
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

exports.getCryptoOnrampQuotes = async (req, res) => {
    try {
        const response = await axios.get(`${STRIPE_BASE_URL}/onramp_quotes`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
