const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

// To create the custom StripeResource for the POST method
const resource = Stripe.StripeResource.extend({
  request: Stripe.StripeResource.method({
    method: 'POST',
    path: 'tax/settings',
  })
});

exports.retrieveTaxSettings = async (req, res) => {
    try {
        const settings = await stripe.tax.settings.retrieve();
        res.json(settings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTaxSettings = async (req, res) => {
    try {
        const { head_office } = req.body;
        new resource(stripe).request({ head_office }, (err, response) => {
            if (err) {
                res.status(500).json({ message: err.message });
            } else {
                res.json(response);
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
