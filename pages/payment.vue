<template>
  <div class="relative w-full flex items-start justify-start flex-col page payment">

    <div class="flex items-center justify-start flex-col page__body">
      <h1 class="w-full mt-6 uppercase tracking-wider max-w-xl">Payment!</h1>
      <transition :name="animateName" mode="out-in" class="relative transition-container">
        <div v-if="section === 'one'" key="1"
          class="w-full flex items-center justify-center flex-col max-w-xl payment-section">
          <div v-if="page.intro" class="pb-12">{{ page.intro }}</div>
          <VeeForm class="flex w-full flex-wrap flex-row mb-12">
            <FormVInput name="name" type="text" label="name" v-model="name" class="w-1/2 mb-6 "
              :required="true" />
            <FormVEmail name="email" type="text" label="email" v-model="email" class="w-1/2 mb-6 " />
            <FormVInput name="address" type="text" label="address" v-model="address" class="w-full" :required="true" />
          </VeeForm>
          <div class="w-full  pb-12 services">
            <h3 class="uppercase tracking-wider services__title">Please select your service below:</h3>
            <div v-for="(option, index) in page.payment_options" :key="index" :id="'service-' + option.id"
              class="shadow-xl my-4 p-6 cursor-pointer services__item" :class="{ 'selected': service.id === option.id }"
              @click="selectService(option)">
              <h3 class="uppercase tracking-wide">{{ option.title }}: ${{ option.amount.toLocaleString("en-US") }}</h3>
              <p>{{ option.description }}</p>
            </div>

          </div>
        </div>
        <div v-else-if="section === 'two'" key="2"
          class="w-full flex items-center justify-center flex-col max-w-xl payment-section">
          <div class="w-full">
            <h5 class="text-xs tracking-wider opacity-50 uppercase mb-4">Selected Service</h5>
            <h3 v-if="service.title && service.amount" class="text-lg tracking-wide uppercase mb-1">{{ service.title }}
              <span class="opacity-50">Amount:</span> ${{ service.amount.toLocaleString("en-US") }}
            </h3>
            <p v-if="service.description" class="text-sm mb-4">{{ service.description }}</p>
            <div class="details">
              <p class="w-full"><span class=" opacity-50">Name:</span>{{ name }} <span class="ml-4 opacity-50">Email:</span>{{ email }}</p>
              <p class="w-full"><span class="opacity-50">Address:</span>{{ address }}</p>
            </div>
            <a @click.prevent="changeService" href="#" class="uppercase mb-8 change-btn">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.32 138.1">
                <path d="m40.41,0L.15,69.42l-.15.27,40.41,68.41.91-.54L1.22,69.69,41.32.53l-.91-.53Z" />
              </svg>
              Change Service
            </a>
          </div>
          <div class="w-full max-w-xl payment__nav">
            <div @click.prevent="changePanel('card', 1)" class="payment__nav-item justify-start"
              :class="{ 'active': panel === 'card' }">
              <h5>Credit Card</h5>
            </div>
            <div @click.prevent="changePanel('bank', 2)" class="payment__nav-item justify-center"
              :class="{ 'active': panel === 'bank' }">
              <h5>Bank Account</h5>
            </div>

          </div>

          <div class="payment__container">
            <transition :name="animateName" mode="out-in" class="relative transition-container">
              <PaymentStripeCard v-if="panel === 'card'" key="1" paymentType="card" class="payment__panel"
                :amount="service.amount" :email="email" />
              <PaymentStripeCard v-else-if="panel === 'bank'" paymentType="us_bank_account" class="payment__panel"
                :amount="service.amount" :email="email" />
            </transition>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'
const toast = useToast()
const { $directus, $preview } = useNuxtApp();
const { data: page, pending, error } = await useAsyncData('payment', () => {
  return $directus.items('payment').readOne(1, {
    fields: [
      'intro,payment_options.id,payment_options.sort,payment_options.title,payment_options.amount,payment_options.description',
    ],
  })
})
const name = ref('')
const address = ref('')
const email = ref('')
const section = ref('one')
const panel = ref('card')
const previousPanelKey = ref(1)
const animateName = ref('slide-right')
function changePanel(newPanel, key) {
  if (previousPanelKey.value < key) {
    animateName.value = 'slide-left'
  } else {
    animateName.value = 'slide-right'
  }
  previousPanelKey.value = key;
  panel.value = newPanel;
}
const service = ref({})
const payment = ref({})
function selectService(option) {
  if (!name.value || !address.value || !email.value) {
    toast.error("You need to complete the form.")
    return
  } else {
    payment.value = {
      name: name.value,
      address: address.value,
      email: email.value,
      amount: option.amount,
      description: option.description,
      title: option.title,
      id: option.id
    }
    localStorage.setItem('payment', JSON.stringify(payment.value));
    service.value = option
    animateName.value = 'slide-left'
    section.value = 'two'

  }
}
function changeService() {
  section.value = 'one'
  animateName.value = 'slide-right'
}


</script>
<style scoped>

.payment {
  .details {
    font-size: 10px;
    @apply uppercase font-bold;
  }
  .services {
    &__title {
      font-size: 12px;
    }

    &__item {
      background: white;
      transition: 0.4s var(--curve);
      background: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(10px);
    }

    .services__item.selected {
      background: var(--darkGrey);
      color: var(--white);
      opacity: 1;

    }
  }

  &__nav {
    @apply flex flex-row justify-around items-center;

    &-item {
      opacity: 0.5;
      transition: all .3s var(--curve);

      @apply tracking-wider uppercase cursor-pointer mb-2 w-1/2 flex items-center relative;

      h5 {
        width: 80%;
        font-size: 10px;
        @apply text-center;
      }
    }

    .payment__nav-item::after {
      content: '';
      display: block;
      width: 0%;
      height: 1px;
      bottom: -5px;
      left: 50%;
      background: var(--grey);
      transition: all .3s var(--curve);
      transform-origin: center;
      @apply absolute;
    }

    .payment__nav-item.active {
      opacity: 1;
    }

    .payment__nav-item:hover {
      opacity: 1;
    }

    .payment__nav-item:hover::after,
    .payment__nav-item.active::after {
      width: 80%;
      left: 10%;
    }

    .payment__nav-item:nth-of-type(1):hover::after,
    .payment__nav-item:nth-of-type(1).active::after {
      width: 80%;
      left: 0%;
    }

    .payment__nav-item:nth-of-type(2):hover::after,
    .payment__nav-item:nth-of-type(2).active::after {
      width: 80%;
      left: 10%;
    }

    .payment__nav-item:nth-of-type(3):hover::after,
    .payment__nav-item:nth-of-type(3).active::after {
      width: 80%;
      left: 20%;
    }

  }

  &__container {
    @apply flex flex-col justify-center items-center w-full max-w-xl overflow-hidden;

    @media (min-width: theme('screens.md')) {}

    @media (min-width: theme('screens.md')) {}
  }

  .transition-container {

    @apply max-w-xl;
  }

  &__panel {

    @apply w-full max-w-xl;

  }

  .change-btn {
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 900;
    @apply inline-block tracking-wider;

    svg {
      transition: 0.4s var(--curve);
      margin-top: -2px;
      height: 12px;
      display: inline-block !important;

      path {
        stroke-width: 10px;
        stroke: var(--darkGrey) !important;
      }
    }
  }

  .change-btn:hover {
    svg {
      transform: translateX(10px)
    }
  }
}
</style>