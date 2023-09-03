const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createValueList = async (req, res) => {
    try {
        const { alias, name, item_type } = req.body;
        const valueList = await stripe.radar.valueLists.create({
            alias,
            name,
            item_type
        });
        res.json(valueList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getValueListById = async (req, res) => {
    try {
        const valueListId = req.params.id;
        const valueList = await stripe.radar.valueLists.retrieve(valueListId);
        res.json(valueList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateValueList = async (req, res) => {
    try {
        const valueListId = req.params.id;
        const updates = req.body;
        const updatedValueList = await stripe.radar.valueLists.update(valueListId, updates);
        res.json(updatedValueList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteValueList = async (req, res) => {
    try {
        const valueListId = req.params.id;
        const deleted = await stripe.radar.valueLists.del(valueListId);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllValueLists = async (req, res) => {
    try {
        const valueLists = await stripe.radar.valueLists.list({
            limit: 3
        });
        res.json(valueLists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
