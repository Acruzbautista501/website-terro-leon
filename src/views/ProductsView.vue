<script lang="ts" setup>
import { productos } from '../data/productos';

import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
const handleScrollToTop = () => {
  window.scrollTo(0, 0);
};

</script>

<template>
  <HeaderComponent />
  <main class="main-products">
    <section class="container-fluid">
      <div class="p-5 text-center container">
          <div class="text-center py-4">
              <h1 class="title-hero-product mb-4 display-1 text-uppercase">Nuestros productos</h1>
          </div>
      </div>
    </section>
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5 w-75">
        <div class="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
          <div v-for="(producto, index) in productos" :key="index" class="col mb-5">
            <div class="card h-100 bg-transparent border-0">
              <!-- Product image -->
               <div class="ratio ratio-1x1">
                 <img class="card-img-top" :src="producto.img || 'https://via.placeholder.com/450x300'" alt="Product image" />
                </div>
              <!-- Product details -->
              <div class="card-body p-4">
                <div class="text-center">
                  <router-link :to="producto.url" class="fs-3 text-uppercase text-decoration-none text-color" @click="handleScrollToTop">{{ producto.titulo }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid">
      <div class="px-4 pb-3">
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
  .main-products {
      background-color: #fff8ea !important;
      color: #454015 !important;
  }
  .text-color {
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

  </style>
  