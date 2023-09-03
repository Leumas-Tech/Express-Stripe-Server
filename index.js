const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const StripeRoutes = require("./Stripe/Stripe.router");

// Loading environment variables
require('dotenv').config();

// Set port from .env or default to 3002
const PORT = process.env.PORT || 3010;

// Set origin from .env or default to 'http://127.0.0.1:5173'
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://127.0.0.1:5173';

// Set up CORS with the origin loaded from .env
app.use(cors({
  origin: [ALLOWED_ORIGIN],
  credentials: true,
}));

// Configuring body parser
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: '*/*', limit: process.env.BODY_LIMIT || '25mb' }));
app.use(express.json());

// Routes
app.use("/stripe", StripeRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Leumas API Server started on port ${PORT}`);
});
