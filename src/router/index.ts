import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import DidacticView from '../views/DidacticView.vue'


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
  {
    path: '/contacto',
    name: 'Contacto',
    component: ContactView,
  },
  {
    path: '/recursos',
    name: 'Recursos',
    component: DidacticView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
