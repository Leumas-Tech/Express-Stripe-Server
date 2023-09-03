const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createCard = async (req, res) => {
    try {
        const data = req.body;
        const card = await stripe.issuing.cards.create(data);
        res.json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveCard = async (req, res) => {
    try {
        const cardId = req.params.id;
        const card = await stripe.issuing.cards.retrieve(cardId);
        res.json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCard = async (req, res) => {
    try {
        const cardId = req.params.id;
        const data = req.body;
        const updatedCard = await stripe.issuing.cards.update(cardId, data);
        res.json(updatedCard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listCards = async (req, res) => {
    try {
        const { limit } = req.query;
        const cards = await stripe.issuing.cards.list({
            limit: parseInt(limit) || 3
        });
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.shipCard = async (req, res) => {
    try {
        const cardId = req.params.card;
        const card = await stripe.testHelpers.issuing.cards.ship(cardId);
        res.json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deliverCard = async (req, res) => {
    try {
        const cardId = req.params.card;
        const card = await stripe.testHelpers.issuing.cards.deliver(cardId);
        res.json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.returnCard = async (req, res) => {
    try {
        const cardId = req.params.card;
        const card = await stripe.testHelpers.issuing.cards.return(cardId);
        res.json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.failCardShipping = async (req, res) => {
    try {
        const cardId = req.params.card;
        const card = await stripe.testHelpers.issuing.cards.fail(cardId);
        res.json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.submitCardForShipping = async (req, res) => {
    try {
        const cardId = req.params.card;
        const card = await stripe.testHelpers.issuing.cards.submit(cardId);
        res.json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// You'll need to fill in the logic for the test helper endpoints similar to the above controllers.
