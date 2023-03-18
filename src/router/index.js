import { createRouter, createWebHistory } from 'vue-router'
import CounterPage from '../views/CounterPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/counter'
  },
  {
    path: '/counter',
    component: CounterPage
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router