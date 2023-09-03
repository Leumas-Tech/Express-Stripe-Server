const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createValueListItem = async (req, res) => {
    try {
        const { value_list, value } = req.body;
        const valueListItem = await stripe.radar.valueListItems.create({
            value_list,
            value
        });
        res.json(valueListItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getValueListItemById = async (req, res) => {
    try {
        const itemId = req.params.id;
        const valueListItem = await stripe.radar.valueListItems.retrieve(itemId);
        res.json(valueListItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteValueListItem = async (req, res) => {
    try {
        const itemId = req.params.id;
        const deleted = await stripe.radar.valueListItems.del(itemId);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllValueListItems = async (req, res) => {
    try {
        const { limit, value_list } = req.query;
        const valueListItems = await stripe.radar.valueListItems.list({
            limit: parseInt(limit) || 3,
            value_list
        });
        res.json(valueListItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
