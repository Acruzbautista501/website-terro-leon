import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: AboutView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
