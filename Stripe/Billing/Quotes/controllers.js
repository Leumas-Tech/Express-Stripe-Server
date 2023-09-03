const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
exports.createQuote = async (req, res) => {
    try {
        const quote = await stripe.quotes.create(req.body);
        res.json(quote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.retrieveQuote = async (req, res) => {
    try {
        const quote = await stripe.quotes.retrieve(req.params.id);
        res.json(quote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateQuote = async (req, res) => {
    try {
        const quote = await stripe.quotes.update(req.params.id, req.body);
        res.json(quote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.finalizeQuote = async (req, res) => {
    try {
        const quote = await stripe.quotes.finalizeQuote(req.params.id);
        res.json(quote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.acceptQuote = async (req, res) => {
    try {
        const quote = await stripe.quotes.accept(req.params.id);
        res.json(quote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancelQuote = async (req, res) => {
    try {
        const quote = await stripe.quotes.cancel(req.params.id);
        res.json(quote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPdf = async (req, res) => {
    try {
        const pdfStream = await stripe.quotes.pdf(req.params.id);
        res.setHeader('Content-Type', 'application/pdf');
        pdfStream.pipe(res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listLineItems = async (req, res) => {
    try {
        const lineItems = await stripe.quotes.listLineItems(req.params.id, req.query);
        res.json(lineItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listComputedUpfrontLineItems = async (req, res) => {
    try {
        const lineItems = await stripe.quotes.listComputedUpfrontLineItems(req.params.id, req.query);
        res.json(lineItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listQuotes = async (req, res) => {
    try {
        const quotes = await stripe.quotes.list(req.query);
        res.json(quotes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
