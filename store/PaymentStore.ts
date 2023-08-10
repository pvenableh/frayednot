export const usePaymentStore = defineStore('PaymentStore', {
  state: () => ({
    payment: {},
  }),
  actions: {
    setPayment(payment) {
      console.log("Test")
        this.payment = payment
    },
    clearPayment() {
        this.payment = {}
    }
  },
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePaymentStore, import.meta.hot))
}
