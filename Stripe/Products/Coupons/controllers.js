const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createCoupon = async (req, res) => {
    try {
        const { percent_off, duration, duration_in_months } = req.body;
        const coupon = await stripe.coupons.create({ percent_off, duration, duration_in_months });
        res.json(coupon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveCoupon = async (req, res) => {
    try {
        const { id } = req.params;
        const coupon = await stripe.coupons.retrieve(id);
        res.json(coupon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCoupon = async (req, res) => {
    try {
        const { id } = req.params;
        const { metadata } = req.body;
        const coupon = await stripe.coupons.update(id, { metadata });
        res.json(coupon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCoupon = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await stripe.coupons.del(id);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listCoupons = async (req, res) => {
    try {
        const { limit } = req.query;
        const coupons = await stripe.coupons.list({ limit: parseInt(limit) });
        res.json(coupons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ... your other controllers ...
