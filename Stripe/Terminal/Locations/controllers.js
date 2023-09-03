const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createLocation = async (req, res) => {
    try {
        const location = await stripe.terminal.locations.create(req.body);
        res.status(201).json(location);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getLocationById = async (req, res) => {
    try {
        const location = await stripe.terminal.locations.retrieve(req.params.id);
        res.status(200).json(location);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateLocation = async (req, res) => {
    try {
        const location = await stripe.terminal.locations.update(req.params.id, req.body);
        res.status(200).json(location);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteLocation = async (req, res) => {
    try {
        const deleted = await stripe.terminal.locations.del(req.params.id);
        res.status(200).json(deleted);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllLocations = async (req, res) => {
    try {
        const locations = await stripe.terminal.locations.list(req.query);
        res.status(200).json(locations);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
