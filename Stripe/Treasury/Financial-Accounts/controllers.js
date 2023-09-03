const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createFinancialAccount = async (req, res) => {
  try {
    const { supported_currencies, features } = req.body;
    const financialAccount = await stripe.treasury.financialAccounts.create({
      supported_currencies,
      features
    });
    res.json(financialAccount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateFinancialAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const { metadata } = req.body;  // You can expand this based on the properties you allow to be updated.
    const financialAccount = await stripe.treasury.financialAccounts.update(id, {
      metadata
    });
    res.json(financialAccount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.retrieveFinancialAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const financialAccount = await stripe.treasury.financialAccounts.retrieve(id);
    res.json(financialAccount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listFinancialAccounts = async (req, res) => {
  try {
    const { limit } = req.query; // Assuming the limit is passed as a query parameter.
    const financialAccounts = await stripe.treasury.financialAccounts.list({
      limit
    });
    res.json(financialAccounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
