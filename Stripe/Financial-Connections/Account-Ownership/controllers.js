const axios = require('axios');

const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
const STRIPE_BASE_URL = 'https://api.stripe.com/v1/financial_connections/accounts';

axios.defaults.headers.common['Authorization'] = `Bearer ${STRIPE_SECRET_KEY}`;
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

exports.listOwners = async (req, res) => {
    const accountId = req.params.id;
    const ownershipId = req.query.ownership;
    
    try {
        const response = await axios.get(`${STRIPE_BASE_URL}/${accountId}/owners`, { params: { limit: 3, ownership: ownershipId } });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
