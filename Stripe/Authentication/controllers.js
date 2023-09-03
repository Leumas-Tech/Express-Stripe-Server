const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Use the API key from environment variables

exports.authenticate = async (req, res) => {
    try {
        // Assuming you pass customer ID in the request body
        const customerId = req.body.customerId;
        
        if (!customerId) {
            return res.status(400).json({ message: 'Customer ID is required' });
        }

        const customer = await stripe.customers.retrieve(customerId);

        // Return the retrieved customer data
        res.json(customer);

    } catch (error) {
        console.error("Stripe Authentication Error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
