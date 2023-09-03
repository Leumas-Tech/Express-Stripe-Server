const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.createReportRun = async (req, res) => {
    try {
        const { report_type, parameters } = req.body;
        const reportRun = await stripe.reporting.reportRuns.create({
            report_type,
            parameters
        });
        res.json(reportRun);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getReportRun = async (req, res) => {
    try {
        const { id } = req.params;
        const reportRun = await stripe.reporting.reportRuns.retrieve(id);
        res.json(reportRun);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listReportRuns = async (req, res) => {
    try {
        const { limit = 3 } = req.query; // Defaults to 3, but can be overridden by query parameter
        const reportRuns = await stripe.reporting.reportRuns.list({ limit: parseInt(limit) });
        res.json(reportRuns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
