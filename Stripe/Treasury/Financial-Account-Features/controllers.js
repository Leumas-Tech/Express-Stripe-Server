const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
exports.updateFinancialAccountFeatures = async (req, res) => {
  try {
    const { id } = req.params;
    const { card_issuing } = req.body; // Adjust as needed based on the features you'll allow updates for.
    const financialAccountFeatures = await stripe.treasury.financialAccounts.updateFinancialAccountFeatures(id, {
      card_issuing
    });
    res.json(financialAccountFeatures);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.retrieveFinancialAccountFeatures = async (req, res) => {
  try {
    const { id } = req.params;
    const feature = await stripe.treasury.financialAccount.retrieveFeature(id);
    res.json(feature);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
