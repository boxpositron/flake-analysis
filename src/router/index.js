import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { meta = {} } = to

  const { title = '' } = meta

  document.title = `${title} | Flake Analysis`

  next()
})

export default router
