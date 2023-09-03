const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.createProduct = async (req, res) => {
    try {
        const product = await stripe.products.create(req.body);
        res.json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.retrieveProduct = async (req, res) => {
    try {
        const product = await stripe.products.retrieve(req.params.id);
        res.json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const product = await stripe.products.update(req.params.id, req.body);
        res.json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.listProducts = async (req, res) => {
    try {
        const products = await stripe.products.list(req.query);
        res.json(products);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await stripe.products.del(req.params.id);
        res.json(deleted);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchProducts = async (req, res) => {
    try {
        // Note: As of my last update, Stripe's official Node.js library doesn't support a direct 'search' method for products.
        // The example you've given suggests a search functionality that isn't present in the current Stripe Node.js SDK.
        // You may have to use the 'list' method with appropriate filters or another method, or if Stripe updates its SDK in the future to include such functionality, then integrate that.
        // However, here's a placeholder:
        const products = await stripe.products.list({ ...req.query });  // Modify as needed.
        res.json(products);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
