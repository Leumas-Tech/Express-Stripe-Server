const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createDebitReversal = async (req, res) => {
  try {
    const { received_debit } = req.body;
    const debitReversal = await stripe.treasury.debitReversals.create({
      received_debit
    });
    res.json(debitReversal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.retrieveDebitReversal = async (req, res) => {
  try {
    const { id } = req.params;
    const debitReversal = await stripe.treasury.debitReversals.retrieve(id);
    res.json(debitReversal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listDebitReversals = async (req, res) => {
  try {
    const { financial_account, limit } = req.query;
    const debitReversals = await stripe.treasury.debitReversals.list({
      financial_account,
      limit: parseInt(limit, 10) || 3,
    });
    res.json(debitReversals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
