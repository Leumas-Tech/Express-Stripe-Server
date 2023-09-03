const axios = require('axios');
const STRIPE_SECRET_KEY = `${process.envSTRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

const STRIPE_BASE_URL = 'https://api.stripe.com/v1/crypto';

axios.defaults.headers.common['Authorization'] = `Bearer ${STRIPE_SECRET_KEY}`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

exports.createCryptoSession = async (req, res) => {
    try {
        const response = await axios.post(`${STRIPE_BASE_URL}/onramp_sessions`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCryptoSessionById = async (req, res) => {
    try {
        const response = await axios.get(`${STRIPE_BASE_URL}/onramp_sessions/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllCryptoSessions = async (req, res) => {
    try {
        const response = await axios.get(`${STRIPE_BASE_URL}/onramp_sessions`, { params: { limit: 3 } });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
