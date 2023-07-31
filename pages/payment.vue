<template>
  <div class="relative w-full min-h-screen flex items-center justify-start flex-col py-20 payment">
    <div v-if="page.intro" class="pb-12">{{ page.intro }}</div>
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
        <PaymentStripeCard v-if="panel === 'card'" key="1" paymentType="card" class="payment__panel"/>
        <PaymentStripeCard v-else-if="panel === 'bank'" paymentType="us_bank_account" class="payment__panel"/>
      </transition>
    </div>
  </div>
</template>

<script setup>
const { $directus, $preview } = useNuxtApp();
const { data: page, pending, error } = await useAsyncData('payment', () => {
  return $directus.items('payment').readOne(1,{
    fields: [
      'intro,payment_options.sort,payment_options.title,payment_options.amount',
    ],
  })
})
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
</script>
<style scoped>
.payment {
  &__nav {
        @apply flex flex-row justify-around items-center;

        &-item {
            opacity: 0.5;
            transition: all .3s var(--curve);

            @apply tracking-wider uppercase cursor-pointer mb-2 w-1/2 flex items-center relative;

            h5 {
                width: 80%;
                font-size: 12px;
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
  
        @media (min-width: theme('screens.md')) {
        }
        @media (min-width: theme('screens.md')) {
        }
    }

    .transition-container {
    
        @apply max-w-xl;
    }

    &__panel {

        @apply w-full max-w-xl;

    }
}
</style>