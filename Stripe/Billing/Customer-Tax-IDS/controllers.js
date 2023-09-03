const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 


exports.addTaxIdToCustomer = async (req, res) => {
    try {
        const taxId = await stripe.customers.createTaxId(req.params.customerId, req.body);
        res.json(taxId);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.retrieveTaxId = async (req, res) => {
    try {
        const taxId = await stripe.customers.retrieveTaxId(req.params.customerId, req.params.taxId);
        res.json(taxId);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.deleteTaxId = async (req, res) => {
    try {
        const deleted = await stripe.customers.deleteTaxId(req.params.customerId, req.params.taxId);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.listTaxIds = async (req, res) => {
    try {
        const taxIds = await stripe.customers.listTaxIds(req.params.customerId, req.query);
        res.json(taxIds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};





