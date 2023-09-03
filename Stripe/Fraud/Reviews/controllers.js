const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

exports.approveReview = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const review = await stripe.reviews.approve(reviewId);
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getReviewById = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const review = await stripe.reviews.retrieve(reviewId);
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await stripe.reviews.list({
            limit: 3
        });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
