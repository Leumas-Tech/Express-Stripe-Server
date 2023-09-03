const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Use the API key from environment variables

exports.previewCreditNote = async (req, res) => {
    try {
        const creditNote = await stripe.creditNotes.preview(req.body);
        res.json(creditNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.createCreditNote = async (req, res) => {
    try {
        const creditNote = await stripe.creditNotes.create(req.body);
        res.json(creditNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.retrieveCreditNote = async (req, res) => {
    try {
        const creditNote = await stripe.creditNotes.retrieve(req.params.id);
        res.json(creditNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.updateCreditNote = async (req, res) => {
    try {
        const creditNote = await stripe.creditNotes.update(req.params.id, req.body);
        res.json(creditNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.retrieveCreditNoteLineItems = async (req, res) => {
    try {
        const lineItems = await stripe.creditNotes.listLineItems(req.params.id, req.query);
        res.json(lineItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.retrieveCreditNotePreviewLineItems = async (req, res) => {
    try {
        stripe.creditNotes.listPreviewLineItems(req.body, (err, lineItems) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            }
            res.json(lineItems);
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};





exports.voidCreditNote = async (req, res) => {
    try {
        const creditNote = await stripe.creditNotes.voidCreditNote(req.params.id);
        res.json(creditNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




exports.listAllCreditNotes = async (req, res) => {
    try {
        const creditNotes = await stripe.creditNotes.list(req.query);
        res.json(creditNotes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



