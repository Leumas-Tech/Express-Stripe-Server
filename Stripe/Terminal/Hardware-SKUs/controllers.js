const axios = require('axios');

const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
const BASE_URL = 'https://api.stripe.com/v1/terminal';
const HEADERS = {
    Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
    "Stripe-Version": "2022-11-15;terminal_hardware_orders_beta=v4",
};

// ... [other controller methods if any]

exports.getHardwareSkuById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await axios.get(`${BASE_URL}/hardware_skus/${id}`, {
            headers: HEADERS,
        });

        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || {});
    }
};

exports.getAllHardwareSkus = async (req, res) => {
    const { country } = req.query;

    try {
        const response = await axios.get(`${BASE_URL}/hardware_skus`, {
            headers: HEADERS,
            params: { country }
        });

        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || {});
    }
};
