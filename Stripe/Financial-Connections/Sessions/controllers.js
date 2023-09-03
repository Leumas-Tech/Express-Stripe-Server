const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createSession = async (req, res) => {
    try {
        const session = await stripe.financialConnections.sessions.create({
            account_holder: {
                type: 'customer',
                customer: 'cus_9s6XKzkNRiz8i3',
            },
            permissions: ['payment_method', 'balances'],
            filters: { countries: ['US'] },
        });
        
        res.json(session);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveSession = async (req, res) => {
    try {
        const sessionId = req.params.id;
        const session = await stripe.financialConnections.sessions.retrieve(sessionId);
        
        res.json(session);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
