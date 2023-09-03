const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createVerificationSession = async (req, res) => {
    try {
        const { type } = req.body;
        const verificationSession = await stripe.identity.verificationSessions.create({
            type
        });
        res.json(verificationSession);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listVerificationSessions = async (req, res) => {
    try {
        const { limit } = req.query;
        const verificationSessions = await stripe.identity.verificationSessions.list({
            limit: parseInt(limit) || 3
        });
        res.json(verificationSessions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveVerificationSession = async (req, res) => {
    try {
        const sessionId = req.params.id;
        const verificationSession = await stripe.identity.verificationSessions.retrieve(sessionId);
        res.json(verificationSession);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateVerificationSession = async (req, res) => {
    try {
        const sessionId = req.params.id;
        const { type } = req.body;
        const verificationSession = await stripe.identity.verificationSessions.update(sessionId, {
            type
        });
        res.json(verificationSession);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancelVerificationSession = async (req, res) => {
    try {
        const sessionId = req.params.id;
        const verificationSession = await stripe.identity.verificationSessions.cancel(sessionId);
        res.json(verificationSession);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.redactVerificationSession = async (req, res) => {
    try {
        const sessionId = req.params.id;
        const verificationSession = await stripe.identity.verificationSessions.redact(sessionId);
        res.json(verificationSession);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
