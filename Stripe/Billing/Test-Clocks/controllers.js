const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createTestClock = async (req, res) => {
    try {
        const testClock = await stripe.testHelpers.testClocks.create(req.body);
        res.json(testClock);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveTestClock = async (req, res) => {
    try {
        const testClock = await stripe.testHelpers.testClocks.retrieve(req.params.id);
        res.json(testClock);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteTestClock = async (req, res) => {
    try {
        const deleted = await stripe.testHelpers.testClocks.del(req.params.id);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.advanceTestClock = async (req, res) => {
    try {
        const testClock = await stripe.testHelpers.testClocks.advance(req.params.id, req.body);
        res.json(testClock);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listTestClocks = async (req, res) => {
    try {
        const testClocks = await stripe.testHelpers.testClocks.list(req.query);
        res.json(testClocks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
