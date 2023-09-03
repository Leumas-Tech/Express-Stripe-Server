const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createPromotionCode = async (req, res) => {
    try {
        const { coupon } = req.body;
        const promotionCode = await stripe.promotionCodes.create({ coupon });
        res.json(promotionCode);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPromotionCode = async (req, res) => {
    try {
        const { id } = req.params;
        const promotionCode = await stripe.promotionCodes.retrieve(id);
        res.json(promotionCode);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePromotionCode = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body; // Get the update data from request body.
        const promotionCode = await stripe.promotionCodes.update(id, updateData);
        res.json(promotionCode);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listPromotionCodes = async (req, res) => {
    try {
        const promotionCodes = await stripe.promotionCodes.list({ limit: 3 }); // Allow customization on limit via query params, if needed.
        res.json(promotionCodes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ... your other controllers ...
