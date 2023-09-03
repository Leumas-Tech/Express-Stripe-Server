const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.retrieveAuthorization = async (req, res) => {
    try {
        const authId = req.params.id;
        const authorization = await stripe.issuing.authorizations.retrieve(authId);
        res.json(authorization);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAuthorization = async (req, res) => {
    try {
        const authId = req.params.id;
        const data = req.body; // Expecting {metadata: {order_id: '6735'}}
        const updatedAuthorization = await stripe.issuing.authorizations.update(authId, data);
        res.json(updatedAuthorization);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.approveAuthorization = async (req, res) => {
    try {
        const authId = req.params.id;
        const authorization = await stripe.issuing.authorizations.approve(authId);
        res.json(authorization);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.declineAuthorization = async (req, res) => {
    try {
        const authId = req.params.id;
        const authorization = await stripe.issuing.authorizations.decline(authId);
        res.json(authorization);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listAuthorizations = async (req, res) => {
    try {
        const { limit } = req.query;
        const authorizations = await stripe.issuing.authorizations.list({
            limit: parseInt(limit) || 3
        });
        res.json(authorizations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
