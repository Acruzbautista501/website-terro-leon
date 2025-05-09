<script lang="ts" setup>
import HeaderComponent from '../../components/HeaderComponent.vue';
import FooterComponent from '../../components/FooterComponent.vue';
import { tejas } from '../../data/products/tejas';
import { useRouter } from 'vue-router';

const handleScrollToTop = () => {
  window.scrollTo(0, 0);
};

const delcon = tejas.delcon;
const aguila = tejas.aguila;
const iko = tejas.iko;
const mextile = tejas.mextile;

const tejasConTipo = [
  ...delcon.map(t => ({ ...t, tipo: 'delcon' })),
  ...aguila.map(t => ({ ...t, tipo: 'aguila' })),
  ...iko.map(t => ({ ...t, tipo: 'iko' })),
  ...mextile.map(t => ({ ...t, tipo: 'mextile' }))
];

const router = useRouter();


function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // quita tildes
    .replace(/\s+/g, '-') // espacios por guiones
    .replace(/[^\w\-]+/g, '') // quita caracteres no válidos
    .replace(/\-\-+/g, '-') // elimina guiones repetidos
    .trim();
}


function irADetalle(teja: { titulo: string; tipo: string }) {
  const slug = slugify(teja.titulo);
  router.push({ name: 'TejaDetalle', params: { tipo: teja.tipo, slug } });
}



</script>

<template>
  <HeaderComponent />

  <main class="bg-color">
    <section class="container-fluid ">
    <div class="p-5 text-center container">
      <div class="text-center py-4">
        <h1 class="title-hero-product mb-4 display-1 text-uppercase">Tejas</h1>
      </div>
    </div>
  </section>

  <section class="container py-5">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
      <div
        v-for="teja in tejasConTipo"
        :key="`${teja.tipo}-${teja.id}`"
        class="col"
      >
        <div class="card border-0 shadow-sm h-100 text-center teja-card" @click="() => { irADetalle(teja); handleScrollToTop(); }">
          <img
            :src="teja.img[0] || '/img/placeholder.jpg'"
            class="card-img-top teja-img"
            :alt="'Imagen de ' + teja.titulo"
          />
          <div class="card-body">
            <h5 class="card-title text-uppercase fs-3">{{ teja.titulo }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container-fluid">
    <div class="px-4 pb-3 pt-3">
      <div class="col-lg-8 mx-auto text-infor">
        <p class="lead mb-5 fs-3">
          *Al ser productos de origen natural, los tonos y colores aquí mostrados pueden tener sutiles variaciones inherentes a los productos de barro. El color mostrado de los productos varía de acuerdo al brillo de cada pantalla.
          Los productos flameados tienen amplias variaciones de color, resultado de la posición de el producto en el horno, patrones de rociado y cobertura resultante.
          <br>
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
</style>
