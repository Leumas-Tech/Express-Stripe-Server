const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createFileLink = async (req, res) => {
    try {
        const { file } = req.body;
        const fileLink = await stripe.fileLinks.create({
            file: file
        });
        res.json(fileLink);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveFileLink = async (req, res) => {
    try {
        const fileLinkId = req.params.id;
        const fileLink = await stripe.fileLinks.retrieve(fileLinkId);
        res.json(fileLink);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateFileLink = async (req, res) => {
    try {
        const fileLinkId = req.params.id;
        const { metadata } = req.body;
        const fileLink = await stripe.fileLinks.update(fileLinkId, {
            metadata: metadata
        });
        res.json(fileLink);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listFileLinks = async (req, res) => {
    try {
        const { limit } = req.query;
        const fileLinks = await stripe.fileLinks.list({
            limit: limit || 10
        });
        res.json(fileLinks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
