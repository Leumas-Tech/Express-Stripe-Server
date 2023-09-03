const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.createCreditReversal = async (req, res) => {
  try {
    const { received_credit } = req.body;
    const creditReversal = await stripe.treasury.creditReversals.create({
      received_credit
    });
    res.json(creditReversal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.retrieveCreditReversal = async (req, res) => {
  try {
    const { id } = req.params;
    const creditReversal = await stripe.treasury.creditReversals.retrieve(id);
    res.json(creditReversal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listCreditReversals = async (req, res) => {
  try {
    const { financial_account, limit } = req.query;
    const creditReversals = await stripe.treasury.creditReversals.list({
      financial_account,
      limit: parseInt(limit, 10) || 3,
    });
    res.json(creditReversals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
