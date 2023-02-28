import { createRouter, createWebHistory } from 'vue-router'
import Schilderwald from '../views/Schilderwald.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Schilderwald
    }
  ]
})

export default router
