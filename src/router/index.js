import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { meta = {} } = to

  const { title = '' } = meta

  document.title = `${title} | Flake Analysis`

  next()
})

export default router
