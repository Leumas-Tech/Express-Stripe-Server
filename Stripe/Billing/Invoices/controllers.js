const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.createInvoice = async (req, res) => {
    const { customer } = req.body; 
    try {
        const response = await stripe.invoices.create({ customer });
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveInvoice = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await stripe.invoices.retrieve(id);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateInvoice = async (req, res) => {
    const { id } = req.params;
    const { metadata } = req.body;
    try {
        const response = await stripe.invoices.update(id, { metadata });
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteInvoice = async (req, res) => {
    const { invoiceId } = req.params;
    try {
        const response = await stripe.invoices.del(invoiceId);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.finalizeInvoice = async (req, res) => {
    const { invoiceId } = req.params;
    try {
        const response = await stripe.invoices.finalizeInvoice(invoiceId);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.payInvoice = async (req, res) => {
    const { invoiceId } = req.params;
    try {
        const response = await stripe.invoices.pay(invoiceId);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.sendInvoice = async (req, res) => {
    const { invoiceId } = req.params;
    try {
        const response = await stripe.invoices.sendInvoice(invoiceId);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.voidInvoice = async (req, res) => {
    const { invoiceId } = req.params;
    try {
        const response = await stripe.invoices.voidInvoice(invoiceId);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.markUncollectable = async (req, res) => {
    const { invoiceId } = req.params;
    try {
        const response = await stripe.invoices.markUncollectible(invoiceId);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.retrieveInvoiceLineItem = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await stripe.invoices.listLineItems(id, { limit: 5 });
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.upcomingInvoice = async (req, res) => {
    const { customer } = req.body;
    try {
        const response = await stripe.invoices.retrieveUpcoming({ customer });
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.upcomingInvoiceLineItems = async (req, res) => {
    const { customer } = req.body;
    try {
        const response = await stripe.invoices.listUpcomingLines({ customer, limit: 5 });
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listAllInvoices = async (req, res) => {
    const { limit } = req.query;
    try {
        const response = await stripe.invoices.list({ limit: limit || 3 });
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Note: Stripe doesn't provide a direct "search" method (based on last update). 
// You might need to use other methods or build a custom solution.
exports.searchInvoices = async (req, res) => {
    // Extracting queries and other parameters from req.body or req.query as needed
    const { query } = req.body;
    try {
        // Your custom search logic here (if applicable)
        const response = await yourSearchLogic({ query });
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};