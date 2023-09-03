const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.getScheduledQueryRun = async (req, res) => {
    try {
        const { id } = req.params;
        const scheduledQueryRun = await stripe.sigma.scheduledQueryRuns.retrieve(id);
        res.json(scheduledQueryRun);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listScheduledQueryRuns = async (req, res) => {
    try {
        const { limit } = req.query;
        const scheduledQueryRuns = await stripe.sigma.scheduledQueryRuns.list({
            limit: limit || 3
        });
        res.json(scheduledQueryRuns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
