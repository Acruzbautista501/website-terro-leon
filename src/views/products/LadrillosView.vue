<script lang="ts" setup>
import HeaderComponent from '../../components/HeaderComponent.vue';
import FooterComponent from '../../components/FooterComponent.vue';
import { ladrillos } from '../../data/products/ladrillos';
import { useRouter } from 'vue-router';

const handleScrollToTop = () => {
  window.scrollTo(0, 0);
};

const rockStoneTab = ladrillos.rockStoneTab;
const rockStone = ladrillos.rockStone;
const mextile = ladrillos.mextile;

const ladrillosConTipo = [
  ...rockStoneTab.map(l => ({ ...l, tipo: 'rockStoneTab' })),
  ...rockStone.map(l => ({ ...l, tipo: 'rockStone' })),
  ...mextile.map(l => ({ ...l, tipo: 'mextile' }))
];

const router = useRouter();

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .trim();
}

function irADetalle(ladrillo: { titulo: string; tipo: string }) {
  const slug = slugify(ladrillo.titulo);
  router.push({ name: 'LadrilloDetalle', params: { tipo: ladrillo.tipo, slug } });
}
</script>

<template>
  <HeaderComponent />
  <main class="bg-color">
    <section class="container-fluid">
      <div class="p-5 text-center container">
        <div class="text-center py-4">
          <h1 class="title-hero-product mb-4 display-1 text-uppercase">Ladrillos y Blocks</h1>
        </div>
      </div>
      <div class="mb-4 container">
        <router-link
          to="/productos"
          class="d-inline-flex align-items-center gap-2 fs-2 text-decoration-none text-back text-uppercase text-infor"
        >
          <i class="bi bi-arrow-left-circle"></i> Volver
        </router-link>
      </div>
    </section>

    <section class="container py-5">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
        <div
          v-for="ladrillo in ladrillosConTipo"
          :key="`${ladrillo.tipo}-${ladrillo.titulo}`"
          class="col"
        >
          <div class="card border-0 shadow-sm h-100 text-center teja-card" @click="() => { irADetalle(ladrillo); handleScrollToTop(); }">
            <div class="ratio ratio-1x1">
              <img
                :src="ladrillo.img[0] || '/img/placeholder.jpg'"
                class="card-img-top"
                :alt="'Imagen de ' + ladrillo.titulo"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title text-uppercase fs-3">{{ ladrillo.titulo }}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid">
      <div class="px-4 pb-3 pt-3">
        <div class="col-lg-8 mx-auto text-infor">
          <p class="lead mb-5 fs-3">
            *Al ser productos de origen natural, los tonos y colores aquí mostrados pueden tener sutiles variaciones. El color mostrado varía según la pantalla.
            <br />
            Se recomienda su compra en base a muestras físicas que puede encontrar en nuestra tienda.
          </p>
        </div>
      </div>
    </section>
  </main>
  <FooterComponent />
</template>

<style scoped>
.bg-color {
  background-color: #fff8ea !important;
  color: #454015 !important;
}

.title-hero-product {
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #3b2415 !important;
}
.title-hero-product,
.text-infor {
  font-family: 'Cormorant', serif;
}

.teja-img {
  object-fit: cover;
  height: 250px;
}

.card-title {
  font-size: 1.1rem;
  font-family: 'Cormorant', serif;
}

.teja-card {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  background: transparent !important;
}
.teja-card:hover {
  transform: scale(1.02);
}
.text-back {
  color: #454015 !important;
}
</style>
