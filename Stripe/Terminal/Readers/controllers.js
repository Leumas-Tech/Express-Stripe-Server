const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_KEY}`;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
// const stripe = require('stripe')('sk_test_51MQRhQCj54we6ywfO4FXUw7acPWmwc7PWiy3gajMmE35qWjzkcuWgaG50kKYzNObnQIjXz1rKacuP1o6mftpVrKu00Z5N4o0jJ');
const axios = require('axios');

exports.createReader = async (req, res) => {
  const reader = await stripe.terminal.readers.create(req.body);
  res.send(reader);
};

exports.retrieveReader = async (req, res) => {
  const reader = await stripe.terminal.readers.retrieve(req.params.id);
  res.send(reader);
};

exports.updateReader = async (req, res) => {
  const reader = await stripe.terminal.readers.update(req.params.id, req.body);
  res.send(reader);
};

exports.deleteReader = async (req, res) => {
  const deleted = await stripe.terminal.readers.del(req.params.id);
  res.send(deleted);
};

exports.listReaders = async (req, res) => {
  const readers = await stripe.terminal.readers.list(req.body);
  res.send(readers);
};

exports.processPaymentIntent = async (req, res) => {
  const reader = await stripe.terminal.readers.processPaymentIntent(req.params.id, req.body);
  res.send(reader);
};

exports.processSetupIntent = async (req, res) => {
  const reader = await stripe.terminal.readers.processSetupIntent(req.params.id, req.body);
  res.send(reader);
};

exports.setReaderDisplay = async (req, res) => {
  const reader = await stripe.terminal.readers.setReaderDisplay(req.params.id, req.body);
  res.send(reader);
};

exports.refundPayment = async (req, res) => {
  const response = await axios.post(`https://api.stripe.com/v1/terminal/readers/${req.params.id}/refund_payment`, req.body, {
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`
    }
  });
  res.send(response.data);
};

exports.cancelReaderAction = async (req, res) => {
  const reader = await stripe.terminal.readers.cancelAction(req.params.id);
  res.send(reader);
};

exports.presentPaymentMethod = async (req, res) => {
  const reader = await stripe.testHelpers.terminal.readers.presentPaymentMethod(req.params.id);
  res.send(reader);
};
