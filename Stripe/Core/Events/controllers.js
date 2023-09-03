const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.retrieveEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const event = await stripe.events.retrieve(eventId);
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listEvents = async (req, res) => {
    try {
        const { limit } = req.query;
        const events = await stripe.events.list({
            limit: limit || 10
        });
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
