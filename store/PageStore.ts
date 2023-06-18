export const usePageStore = defineStore('PageStore', {
  state: () => ({
    page: 'test',
    internal: false
  }),
  actions: {
    addClass(route) {
      // console.log(route)
      this.page = route
    },
    setInternal(bool) {
      this.internal = bool
    }
  },
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
}
