import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ProductsView from '../views/ProductsView.vue'
import DidacticView from '../views/DidacticView.vue'
import TermsConditionsView from '../views/TermsConditionsView.vue'
import FAQsView from '../views/FAQsView.vue'
import TejasView from '../views/products/TejasView.vue'

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
    path: '/productos',
    name: 'Productos',
    component: ProductsView,
  },
  {
    path: '/productos/tejas',
    name: 'Tejas',
    component: TejasView,
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
];
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
