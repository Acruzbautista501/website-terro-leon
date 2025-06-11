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
import FachaletasView from '../views/products/FachaletasView.vue'
import LadrillosView from '../views/products/LadrillosView.vue'
import AdoquinesView from '../views/products/AdoquinesView.vue'
import CanterasView from '../views/products/CanterasView.vue'
import TejasDetailsView from '../views/products/details/TejasDetailsView.vue'
import FachaletasDetailsView from '../views/products/details/FachaletasDetailsView.vue'
import PrivacyNoticeView from '../views/PrivacyNoticeView.vue'
import DeliveryPoliciesView from '../views/DeliveryPoliciesView.vue'
import LadrillosDetailsView from '../views/products/details/LadrillosDetailsView.vue'
import AdoquinesDetailsView from '../views/products/details/AdoquinesDetailsView.vue'
import CanterasDetailsView from '../views/products/details/CanterasDetailsView.vue'
import AccesoriosView from '../views/products/AccesoriosView.vue'
import AccesoriosDetailsView from '../views/products/details/AccesoriosDetailsView.vue'


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
    path: '/productos/fachaletas-y-piedras',
    name: 'Fachaletas y Piedras',
    component: FachaletasView,
    meta: { title: 'Fachaletas y Piedras | Terro' },
  },
  {
    path: '/productos/ladrillos-y-block',
    name: 'Ladrillos y Block',
    component: LadrillosView,
    meta: { title: 'Ladrillos y Block | Terro' },
  },
  {
    path: '/productos/adoquines',
    name: 'Adoquines',
    component: AdoquinesView,
    meta: { title: 'Adoquines | Terro' },
  },
  {
    path: '/productos/canteras',
    name: 'Canteras',
    component: CanterasView,
    meta: { title: 'Canteras | Terro' },
  },
  {
    path: '/productos/accesorios',
    name: 'Accesorios',
    component: AccesoriosView,
    meta: { title: 'Accesorios | Terro' },
  },
  {
    path: '/tejas/:tipo/:slug',
    name: 'TejaDetalle',
    component: TejasDetailsView,
    meta: { title: 'Detalle de Teja | Terro' }, // Base genérica
  },
  {
    path: '/fachaletas-y-piedras/:tipo/:slug',
    name: 'FachaletaDetalle',
    component: FachaletasDetailsView,
    meta: { title: 'Detalle de Fachaletas | Terro' }, // Base genérica
  },
  {
    path: '/ladrillos-y-block/:tipo/:slug',
    name: 'LadrilloDetalle',
    component: LadrillosDetailsView,
    meta: { title: 'Detalle de Ladrillos | Terro' }, // Base genérica
  },
  {
    path: '/adoquines/:tipo/:slug',
    name: 'AdoquinDetalle',
    component: AdoquinesDetailsView,
    meta: { title: 'Detalle de Adoquines | Terro' }, // Base genérica
  },
  {
    path: '/canteras/:tipo/:slug',
    name: 'CanteraDetalle',
    component: CanterasDetailsView,
    meta: { title: 'Detalle de Canteras | Terro' }, // Base genérica
  },
    {
    path: '/accesorios/:tipo/:slug',
    name: 'AccesorioDetalle',
    component: AccesoriosDetailsView,
    meta: { title: 'Detalle de Accesorios | Terro' }, // Base genérica
  },
  {
    path: '/recursos',
    name: 'Recursos',
    component: DidacticView,
    meta: { title: 'Recursos | Terro' },
  },
  {
    path: '/faqs',
    name: 'FAQ´s',
    component: FAQsView,
    meta: { title: 'Preguntas Frecuentes | Terro' },
  },
  {
    path: '/politica-de-privacidad',
    name: 'Política de Privacidad',
    component: PrivacyNoticeView,
    meta: { title: 'Política de Privacidad | Terro' },
  },
    {
    path: '/politicas-de-entrega-y-devoluciones',
    name: 'Políticas de Entrega y Devoluciones',
    component: DeliveryPoliciesView,
    meta: { title: 'Políticas de Entrega y Devoluciones | Terro' },
  },
  {
    path: '/terminos-y-condiciones',
    name: 'Términos y Condiciones',
    component: TermsConditionsView,
    meta: { title: 'Términos y Condiciones | Terro' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Cambiar título dinámicamente
router.beforeEach((to, _from, next) => {
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
