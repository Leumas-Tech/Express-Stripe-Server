const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createConfiguration = async (req, res) => {
    try {
        const { configurationData } = req.body;
        const configuration = await stripe.terminal.configurations.create(configurationData);
        res.json(configuration);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveConfiguration = async (req, res) => {
    try {
        const { id } = req.params;
        const configuration = await stripe.terminal.configurations.retrieve(id);
        res.json(configuration);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateConfiguration = async (req, res) => {
    try {
        const { id } = req.params;
        const { updateData } = req.body;
        const configuration = await stripe.terminal.configurations.update(id, updateData);
        res.json(configuration);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteConfiguration = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await stripe.terminal.configurations.del(id);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listConfigurations = async (req, res) => {
    try {
        const { limit } = req.query;  // Assuming the limit is passed as a query parameter.
        const configurations = await stripe.terminal.configurations.list({ limit });
        res.json(configurations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
