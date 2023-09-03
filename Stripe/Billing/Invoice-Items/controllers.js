const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createInvoiceItem = async (req, res) => {
    try {
        const invoiceItem = await stripe.invoiceItems.create(req.body);
        res.json(invoiceItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.retrieveInvoiceItem = async (req, res) => {
    try {
        const invoiceItem = await stripe.invoiceItems.retrieve(req.params.invoiceItemId);
        res.json(invoiceItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateInvoiceItem = async (req, res) => {
    try {
        const invoiceItem = await stripe.invoiceItems.update(req.params.invoiceItemId, req.body);
        res.json(invoiceItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteInvoiceItem = async (req, res) => {
    try {
        const deleted = await stripe.invoiceItems.del(req.params.invoiceItemId);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.listInvoiceItems = async (req, res) => {
    try {
        const invoiceItems = await stripe.invoiceItems.list(req.query);
        res.json(invoiceItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};





