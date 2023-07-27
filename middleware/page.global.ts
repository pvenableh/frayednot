import { usePageStore } from '~~/store/PageStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const getDepth = (path) => {
    return path.split('/').filter((seg) => seg.length > 0).length
  }
  const routeName = ref()
  if (to.name === 'index') {
    routeName.value = 'page-home'
  } else if (to.name === 'contact') {
    routeName.value = 'page-contact'
  } else if(!to.name) {
    routeName.value = 'page-error h-screen'
  } else {
    routeName.value = to.name
  }
  console.log(to.name)
  const pageStore = usePageStore()
  pageStore.addClass(routeName.value)

  const toDepth = getDepth(to.path)
  const fromDepth = getDepth(from.path)

  if (to.query.direction === 'next') {
    // to.meta.pageTransition = { name: 'page-left' }
    // from.meta.pageTransition = { name: 'page-left' }
    to.meta.pageTransition = { name: 'fade' }
    from.meta.pageTransition = { name: 'fade' }
  } else if (to.query.direction === 'prev') {
    // to.meta.pageTransition = { name: 'page-right' }
    // from.meta.pageTransition = { name: 'page-right' }
    to.meta.pageTransition = { name: 'fade' }
    from.meta.pageTransition = { name: 'fade' }
  } else if (toDepth > fromDepth) {
    // to.meta.pageTransition = { name: 'page-up' }
    // from.meta.pageTransition = { name: 'page-up' }
    to.meta.pageTransition = { name: 'fade' }
    from.meta.pageTransition = { name: 'fade' }
  } else {
    to.meta.pageTransition = { name: 'fade' }
    from.meta.pageTransition = { name: 'fade' }
  }
})
