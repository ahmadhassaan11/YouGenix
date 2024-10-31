const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const User = require('../models/User');

exports.handleStripeWebhook = (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.sendStatus(400);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    // Update the user's subscription status in database
    const userId = session.client_reference_id;
    User.findByIdAndUpdate(userId, { subscriptionType: 'unlimited' }, (err) => {
      if (err) console.error(err);
    });
  }

  res.json({ received: true });
};
