
require('dotenv').config()

const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_KEY);
const express = require('express');
const router = express.Router();




router.post('/pay', async (req, res) => {
    
    const {name,classId,studentId,amount} = req.body;

    if(!name || ! classId || !studentId || !amount){
        return res.status(400).json( { message : 'you must enter name class and student and amount!'});
    }

    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
      {customer: customer.id},
      {apiVersion: '2023-10-16'}
    );

    const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency: 'eur',
        customer: customer.id,
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        //   automatic_payment_methods: {
        //     enabled: true,
        //   },
        payment_method_types : ['card'],
        metadata : {name,classId,studentId},
        });

        res.json({
        paymentIntent: paymentIntent.client_secret,
        ephemeralKey: ephemeralKey.secret,
        customer: customer.id,
        publishableKey: process.env.STRIPE_PUBLISH_KEY
        });

    
  });



module.exports = router;

