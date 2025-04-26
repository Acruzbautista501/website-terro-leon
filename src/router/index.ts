import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import DidacticView from '../views/DidacticView.vue'
import TermsConditionsView from '../views/TermsConditionsView.vue'
import FAQsView from '../views/FAQsView.vue'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Inicio',
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
  {
    path: '/terminos-y-condiciones',
    name: 'Términos y Condiciones',
    component: TermsConditionsView,
  },
  {
    path: '/faqs',
    name: 'FAQ´s',
    component: FAQsView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
