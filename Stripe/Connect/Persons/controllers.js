const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
exports.createPerson = async (req, res) => {
    try {
        const person = await stripe.accounts.createPerson(req.params.accountId, req.body);
        res.json(person);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrievePerson = async (req, res) => {
    try {
        const person = await stripe.accounts.retrievePerson(req.params.accountId, req.params.personId);
        res.json(person);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePerson = async (req, res) => {
    try {
        const updatedPerson = await stripe.accounts.updatePerson(req.params.accountId, req.params.personId, req.body);
        res.json(updatedPerson);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deletePerson = async (req, res) => {
    try {
        const deletedPerson = await stripe.accounts.deletePerson(req.params.accountId, req.params.personId);
        res.json(deletedPerson);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listPersons = async (req, res) => {
    try {
        const persons = await stripe.accounts.listPersons(req.params.accountId, req.query);
        res.json(persons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
