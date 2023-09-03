const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.retrieveVerificationReport = async (req, res) => {
    try {
        const reportId = req.params.id;
        const verificationReport = await stripe.identity.verificationReports.retrieve(reportId);
        res.json(verificationReport);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listVerificationReports = async (req, res) => {
    try {
        const { limit } = req.query;
        const verificationReports = await stripe.identity.verificationReports.list({
            limit: parseInt(limit) || 3
        });
        res.json(verificationReports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
