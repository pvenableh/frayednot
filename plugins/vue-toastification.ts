import Toast, { TYPE } from "vue-toastification";
import "vue-toastification/dist/index.css";

// export default defineNuxtPlugin((nuxtApp) => {
//     nuxtApp.vueApp.use(Toast, {
        
//         maxToasts: 20,
//         newestOnTop: true
//       })
//     });
// import Toast, { TYPE } from "vue-toastification";
// import "vue-toastification/dist/index.css";


const options = {

    timeout: 30000,
    position: 'top-right',
    transition: "Vue-Toastification__fade",
    newestOnTop: true,
    closeButton: false,
    backgroundColor: 'black',
    // ToastOptions object for each type of toast
    [TYPE.ERROR]: {
        timeout: 30000,
        closeButton: false,
        transition: "Vue-Toastification__fade",
        backgroundColor: 'black',
    },
    [TYPE.SUCCESS]: {
        timeout: 30000,
        // hideProgressBar: true,
        closeButton: false,
        transition: "Vue-Toastification__fade",
    }

};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast, options)
});
