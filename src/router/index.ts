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
import TejasDetailsView from '../views/products/details/TejasDetailsView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Inicio',
    component: HomeView,
    meta: { title: 'Terro | Inicio' },
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: AboutView,
    meta: { title: 'Nosotros | Terro' },
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: ContactView,
    meta: { title: 'Contacto | Terro' },
  },
  {
    path: '/productos',
    name: 'Productos',
    component: ProductsView,
    meta: { title: 'Productos | Terro' },
  },
  {
    path: '/productos/tejas',
    name: 'Tejas',
    component: TejasView,
    meta: { title: 'Tejas | Terro' },
  },
  {
    path: '/tejas/:tipo/:slug',
    name: 'TejaDetalle',
    component: TejasDetailsView,
    meta: { title: 'Detalle de Teja | Terro' }, // Base genérica
  },
  {
    path: '/recursos',
    name: 'Recursos',
    component: DidacticView,
    meta: { title: 'Recursos | Terro' },
  },
  {
    path: '/terminos-y-condiciones',
    name: 'Términos y Condiciones',
    component: TermsConditionsView,
    meta: { title: 'Términos y Condiciones | Terro' },
  },
  {
    path: '/faqs',
    name: 'FAQ´s',
    component: FAQsView,
    meta: { title: 'Preguntas Frecuentes | Terro' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Cambiar título dinámicamente
router.beforeEach((to, from, next) => {
  const defaultTitle = 'Terro'

  if (to.name === 'TejaDetalle') {
    const tipo = to.params.tipo as string
    const slug = to.params.slug as string

    // Generar un título más legible basado en 'tipo' y 'slug'
    const tipoFormatted = tipo.charAt(0).toUpperCase() + tipo.slice(1).toLowerCase(); // Capitalizar el tipo
    const slugFormatted = slug.replace(/-/g, ' ').toUpperCase(); // Reemplazar guiones por espacios y poner en mayúsculas
    
    document.title = `${tipoFormatted} - ${slugFormatted} | ${defaultTitle}`
  } else {
    document.title = (to.meta.title as string) || defaultTitle
  }

  next()
})

export default router
