const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createCustomer = async (req, res) => {
    try {
        const { description } = req.body;
        const customer = await stripe.customers.create({ description });
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveCustomer = async (req, res) => {
    try {
        const customerId = req.params.id;
        const customer = await stripe.customers.retrieve(customerId);
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const customerId = req.params.id;
        const updateData = req.body;
        const customer = await stripe.customers.update(customerId, updateData);
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const customerId = req.params.id;
        const deleted = await stripe.customers.del(customerId);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listCustomers = async (req, res) => {
    try {
        const { limit } = req.query;
        const customers = await stripe.customers.list({
            limit: limit || 10
        });
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.searchCustomers = async (req, res) => {
    // Note: As of my last knowledge update in September 2021, there wasn't a direct "search" method for customers in the Stripe Node library.
    // Below is a simple example of how you might want to handle searches. You'll need to implement custom search logic for your needs.
    try {
        const { query } = req.query;
        // Implement custom search logic here
        // ...
        res.json({ message: "Search functionality not directly provided by Stripe's Node library as of 2021" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
