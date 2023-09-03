const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
const fs = require('fs');

exports.createFile = async (req, res) => {
    try {
        const { filePath, purpose } = req.body;
        const fileData = fs.readFileSync(filePath);
        
        const file = await stripe.files.create({
            purpose: purpose,
            file: {
                data: fileData,
                name: filePath.split('/').pop(),
                type: 'application/octet-stream',
            },
        });
        
        res.json(file);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveFile = async (req, res) => {
    try {
        const fileId = req.params.id;
        const file = await stripe.files.retrieve(fileId);
        res.json(file);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listFiles = async (req, res) => {
    try {
        const { limit } = req.query;
        const files = await stripe.files.list({
            limit: limit || 10
        });
        res.json(files);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
