const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createToken = async (req, res) => {
    try {
        let token;
        // Based on the type of token being created, you can use different properties
        if (req.body.card) {
            token = await stripe.tokens.create({ card: req.body.card });
        } else if (req.body.bank_account) {
            token = await stripe.tokens.create({ bank_account: req.body.bank_account });
        } else if (req.body.pii) {
            token = await stripe.tokens.create({ pii: req.body.pii });
        } else if (req.body.account) {
            token = await stripe.tokens.create({ account: req.body.account });
        } else if (req.body.person) {
            token = await stripe.tokens.create({ person: req.body.person });
        } else if (req.body.cvc_update) {
            token = await stripe.tokens.create({ cvc_update: req.body.cvc_update });
        } else {
            return res.status(400).json({ message: "Invalid token data." });
        }
        res.json(token);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveToken = async (req, res) => {
    try {
        const token = await stripe.tokens.retrieve(req.params.id);
        res.json(token);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
