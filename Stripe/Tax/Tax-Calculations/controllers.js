const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');

exports.createTaxCalculation = async (req, res) => {
    try {
        const { currency, customer_details, line_items, shipping_cost, expand } = req.body;
        const calculation = await stripe.tax.calculations.create({
            currency,
            customer_details,
            line_items,
            shipping_cost,
            expand
        });
        res.json(calculation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listTaxCalculationLineItems = async (req, res) => {
    try {
        const { id } = req.params;
        const calculation = await stripe.tax.calculations.listLineItems(id);
        res.json(calculation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
