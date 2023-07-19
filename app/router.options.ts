import type { RouterOptions } from '@nuxt/schema'

export default <RouterOptions> {
  scrollBehavior(to, _from, savedPosition) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else {
          if (to.hash) {
            resolve({
              el: to.hash,
              top: 0
            })
          } else {
            resolve({ top: 0 })
          }
        }
      }, 100)
    })
  }
}

// import type { RouterOptions } from "@nuxt/schema";

// export default <RouterOptions>{
//   scrollBehavior(to, from, savedPosition) {
//     console.log('savedPosition: ' + savedPosition)
//     if (savedPosition) {
//       return savedPosition;
//     } else {
//       return {
//         top: 0,
//         behavior: "smooth",
//       };
//     }
//     return { top: 0 };
//   },
// };