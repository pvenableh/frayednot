<template>
  <form id="payment-form" @submit.prevent="handleSubmit">
    <div class="
        uppercase
        tracking-wide
        text-xs
        mb-6
        flex flex-row
        items-center
        justify-between
      ">
      <!-- <div class="w-1/2">
        <h5>
          <span>CART TOTAL: </span>${{ parseFloat(cartStore.total).toFixed(2) }}
        </h5>
        <h5>
          <span>SHIPPING: </span>${{
            parseFloat(orderStore.order.shipping.method.price).toFixed(2)
          }}
        </h5>
      </div> -->
      <!-- <div class="w-1/2 text-right">
        <h5 v-if="orderStore.order.promotion.amount > 0" class="">
          <span>Promo: </span>
          <span v-if="orderStore.order.promotion.type === 'amount'">$</span
          >{{ orderStore.order.promotion.amount
          }}<span v-if="orderStore.order.promotion.type === 'percentage'"
            >%</span
          >
          OFF
        </h5>
        <h5>
          <span>ORDER TOTAL: </span>${{
            parseFloat(orderStore.order.total).toFixed(2)
          }}
        </h5>
      </div> -->
    </div>
    <div id="payment-element" />
    <FormVButton id="submit" class="w-full my-6" type="submit" :disabled="isLoading">Submit Payment</FormVButton>
    <div id="error-message">
      <p v-for="(message, index) in messages">{{ message }}</p>
    </div>
  </form>
</template>

<script setup>
const config = useRuntimeConfig()
import { loadStripe } from '@stripe/stripe-js'
// import { openScreen, loader, closeScreen } from '~/composables/useScreen'
const props = defineProps({
  paymentType: {
    type: String,
    default: null,
  },
})
const response = reactive({})
const clientSecret = ref('')
// const cartStore = useCartStore()
// const orderStore = useOrderStore()
const isLoading = ref(false)
const messages = ref([])
let stripe
let elements


onMounted(async () => {
  // let total
  // total = (parseFloat(orderStore.order.total) * 100).toString()
  // let stripeTotal = parseFloat(total).toFixed(0)
  stripe = await loadStripe(config.public.stripePublic)
  const { data, pending, error, refresh } = await useFetch(
    '/api/stripe/paymentintent?amount=1000&customer=&email=peter@huestudios.com&paymentType=' +
    props.paymentType,
    {
      onResponse({ request, response, options }) {
        return response._data
      },
    }
  )

  response.value = data
  console.log(response.value.client_secret)
  clientSecret.value = response.value.client_secret
  // messages.value.push(`Client secret returned.`)
  const options = {
    clientSecret: clientSecret.value,
    style: {
      base: {
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      },
    },
    appearance: {
      // theme: 'none',

      variables: {
        colorPrimary: '#502989',
        colorBackground: '#ffffff',
        colorText: '#502989',
        colorDanger: '#df1b41',
        fontFamily:
          'Proxima Nova W01 Regular, -apple-system, Roboto, Helvetica Neue, Helvetica, sans-serif',
        // spacingUnit: '2px',
        borderRadius: '2px',

        // See all possible variables below
      },
      rules: {
        '.Label': {
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          fontSize: '10px',
        },
        '.Error': {
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontSize: '8px',
        },
      },
    },
  }
  elements = stripe.elements(options)
  const paymentElement = elements.create('payment')
  paymentElement.mount('#payment-element')
  isLoading.value = false
  paymentElement.on('change', function (event) {
    console.log(event)
  })
})
// const paymentMethods = ref([])
// if (props.customer) {
//   $fetch(`/api/paymentmethodsget?customer=${customer}`).then((res) => {
//     paymentMethods.value = res.data
//   })
// }
const handleSubmit = async () => {
  loader.value = true
  openScreen()
  if (isLoading.value) {
    return
  }
  orderStore.save()
  isLoading.value = true
  const { error } = await stripe.confirmPayment({
    elements: elements,
    confirmParams: {
      return_url: 'http://localhost:3000/checkout/confirmation',
    },
    // redirect: 'if_required', 'https://stupendous-cendol-a156b4.netlify.app/checkout/confirmation',
  })
  if (error) {
    messages.value.push(error.message)
    closeScreen()
  }
  isLoading.value = false
  closeScreen()
}
</script>
<style>
#payment-form {
  width: 100%;
  @media (min-width: theme('screens.sm')) {
    /* max-width: 550px; */
  }
  #payment-element {
    min-height: 335px;
  }
}
</style>