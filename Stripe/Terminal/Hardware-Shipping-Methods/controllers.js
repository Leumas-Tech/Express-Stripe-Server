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

// ... [other controller methods]

exports.getHardwareShippingMethodById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await axios.get(`${BASE_URL}/hardware_shipping_methods/${id}`, {
            headers: HEADERS,
        });

        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || {});
    }
};

exports.getAllHardwareShippingMethods = async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/hardware_shipping_methods`, {
            headers: HEADERS,
        });

        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || {});
    }
};
