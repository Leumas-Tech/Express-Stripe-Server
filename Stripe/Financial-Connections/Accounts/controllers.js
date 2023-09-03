const axios = require('axios');

const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
const STRIPE_BASE_URL = 'https://api.stripe.com/v1/financial_connections/accounts';

axios.defaults.headers.common['Authorization'] = `Bearer ${STRIPE_SECRET_KEY}`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

exports.retrieveAccount = async (req, res) => {
    try {
        const response = await axios.get(`${STRIPE_BASE_URL}/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.refreshAccount = async (req, res) => {
    try {
        const response = await axios.post(`${STRIPE_BASE_URL}/${req.params.id}/refresh`, { features: ['balance'] });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.subscribeAccount = async (req, res) => {
    axios.defaults.headers.post['Stripe-Version'] = '2022-11-15; financial_connections_transactions_beta=v1';
    try {
        const response = await axios.post(`${STRIPE_BASE_URL}/${req.params.id}/subscribe`, { "features[]": "transactions" });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.unsubscribeAccount = async (req, res) => {
    axios.defaults.headers.post['Stripe-Version'] = '2022-11-15; financial_connections_transactions_beta=v1';
    try {
        const response = await axios.post(`${STRIPE_BASE_URL}/${req.params.id}/unsubscribe`, { "features[]": "transactions" });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.disconnectAccount = async (req, res) => {
    try {
        const response = await axios.post(`${STRIPE_BASE_URL}/${req.params.id}/disconnect`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listAccounts = async (req, res) => {
    try {
        const response = await axios.get(`${STRIPE_BASE_URL}`, { params: { account_holder: { customer: 'cus_9s6XKzkNRiz8i3' } } });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
