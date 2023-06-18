export const useProfileStore = defineStore('ProfileStore', {
  state: () => ({
    profile: {},
  }),
  actions: {
    setProfile(profile) {
      console.log("Test")
        this.profile = profile
    },
    clearProfile() {
        this.profile = {}
    }
  },
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProfileStore, import.meta.hot))
}
