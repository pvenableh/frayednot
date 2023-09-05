import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  let total = query.amount
  console.log(query.amount)
  let paymentType = query.paymentType
  let email = query.email
  // let customerId = query.customer
  let options
  if (paymentType) {
    if (paymentType === 'card') {
      options = {
        amount: total,
        currency: 'usd',
        // customer: customerId,
        payment_method_types: ['card', 'link'],
        receipt_email: email,
        // setup_future_usage: 'on_session',

        // statement_descriptor: 'Purchase from danablairdesigns.com.',
      }
    } else {
      options = {
        amount: total,
        currency: 'usd',
        // customer: customerId,
        payment_method_types: [paymentType],
        receipt_email: email,
        // setup_future_usage: 'on_session',

        // statement_descriptor: 'Purchase from danablairdesigns.com.',
      }
    }
  } else {
    options = {
      amount: total,
      currency: 'usd',
      // customer: customerId,
      receipt_email: email,
      // setup_future_usage: 'on_session',
      automatic_payment_methods: {
        enabled: true,
      },
      // statement_descriptor: 'Purchase from danablairdesigns.com.',
    }
  }

  const stripe = new Stripe(
    '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'
  )
  // hue sk_test_MEBnHMrFHTpPJsl88qX92GbI00wdGnFKSm

  const paymentIntent = await stripe.paymentIntents.create(options)

  return paymentIntent
})
