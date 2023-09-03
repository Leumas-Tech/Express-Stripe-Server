const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createProduct = async (req, res) => {
    try {
        const { name } = req.body;
        const product = await stripe.products.create({ name });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await stripe.products.retrieve(id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body; // Use the request body to pass updated data.
        const product = await stripe.products.update(id, updateData);
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listProducts = async (req, res) => {
    try {
        const products = await stripe.products.list({ limit: 3 }); // You may allow more customization on limit via query params.
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await stripe.products.del(id);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.searchProducts = async (req, res) => {
    // Note: As of my last training cut-off in September 2021, Stripe's Node.js SDK does not have a direct "search" method.
    // You might need to implement a custom search on your end or use another API endpoint.
    // But for the sake of this example, I'm assuming a direct search method.
    try {
        const { query } = req.query; 
        const product = await stripe.products.search({ query });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ... your other controllers ...
