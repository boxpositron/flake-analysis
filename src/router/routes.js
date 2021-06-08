import Info from '@/pages/Info.vue'
import Delta from '@/pages/Delta.vue'

const routes = [
  {
    path: '/',
    redirect: '/info'
  },
  {
    path: '/info',
    name: 'info',
    component: Info,
    meta: {
      title: 'Info'
    }
  },
  {
    path: '/delta',
    name: 'delta',
    component: Delta,
    meta: {
      title: 'Delta'
    }
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    redirect: '/'
  }
]

export default routes
