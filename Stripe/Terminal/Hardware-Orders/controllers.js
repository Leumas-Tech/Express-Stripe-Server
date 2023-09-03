const axios = require('axios');
const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

const stripeHeaders = {
    Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
    "Stripe-Version": "2022-11-15;terminal_hardware_orders_beta=v4",
};

exports.previewHardwareOrders = (req, res) => {
    // To be defined based on Stripe SDK or curl request
};

exports.createHardwareOrder = async (req, res) => {
    try {
        const response = await axios.post('https://api.stripe.com/v1/terminal/hardware_orders', req.body, { headers: stripeHeaders });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveHardwareOrder = async (req, res) => {
    try {
        const response = await axios.get(`https://api.stripe.com/v1/terminal/hardware_orders/${req.params.id}`, { headers: stripeHeaders });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listHardwareOrders = async (req, res) => {
    try {
        const response = await axios.get('https://api.stripe.com/v1/terminal/hardware_orders', { headers: stripeHeaders });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancelHardwareOrder = async (req, res) => {
    try {
        const response = await axios.post(`https://api.stripe.com/v1/terminal/hardware_orders/${req.params.id}/cancel`, {}, { headers: stripeHeaders });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.markReadyToShip = async (req, res) => {
    try {
        const response = await axios.post(`https://api.stripe.com/v1/test_helpers/terminal/hardware_orders/${req.params.id}/mark_ready_to_ship`, {}, { headers: stripeHeaders });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.shipHardwareOrder = async (req, res) => {
    try {
        const response = await axios.post(`https://api.stripe.com/v1/test_helpers/terminal/hardware_orders/${req.params.id}/ship`, {}, { headers: stripeHeaders });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deliverHardwareOrder = async (req, res) => {
    try {
        const response = await axios.post(`https://api.stripe.com/v1/test_helpers/terminal/hardware_orders/${req.params.id}/deliver`, {}, { headers: stripeHeaders });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.markUndeliverable = async (req, res) => {
    try {
        const response = await axios.post(`https://api.stripe.com/v1/test_helpers/terminal/hardware_orders/${req.params.id}/mark_undeliverable`, {}, { headers: stripeHeaders });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
