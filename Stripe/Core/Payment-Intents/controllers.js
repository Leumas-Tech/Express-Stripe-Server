const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.create = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create(req.body);
        res.json(paymentIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieve = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(req.params.id);
        res.json(paymentIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.update(req.params.id , req.body);
        res.json(paymentIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.confirm = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.conirm(req.params.id, req.body);
        res.json(paymentIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.capture = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.capture(req.params.id);
        res.json(paymentIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancel = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.cancel(req.params.id);
        res.json(paymentIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.list = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(req.body);
        res.json(paymentIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.incrementAuthorization = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.incrementAuthorization(req.params.id, req.body);
        res.json(paymentIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.search = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.search({
            query: 'status:\'succeeded\' AND metadata[\'order_id\']:\'6735\'',
          });
        res.json(paymentIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.verifyMicrodeposits = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.verifyMicrodeposits(
            'pi_1Gt08V2eZvKYlo2CRrTg2VAR',
            {amounts: [32, 45]}
          );
        res.json(paymentIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.applyCustomerBalance = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.applyCustomerBalance(
            'pi_1Gt08V2eZvKYlo2CRrTg2VAR'
          );
        res.json(paymentIntent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


