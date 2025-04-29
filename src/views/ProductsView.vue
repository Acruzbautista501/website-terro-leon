<script lang="ts" setup>
import { productos } from '../data/productos';

import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

</script>

<template>
  <HeaderComponent />
  <section class="bg-img-product py-5 position-relative">
    <div class="position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(0, 0, 0, 0.5);"></div>
    <div class="container px-4 px-lg-5 my-5 position-relative">
    <div class="text-center">
      <h1 class="display-3 title-hero-product">Elegancia natural para tu construcción</h1>
      <p class="lead mb-0">
        Especialistas en barro, cantera y acabados únicos.
      </p>
    </div>
    </div>
  </section>
  <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
          <div v-for="(producto, index) in productos" :key="index" class="col mb-5">
            <div class="card h-100">
              <!-- Product image -->
              <img class="card-img-top" :src="producto.img || 'https://via.placeholder.com/450x300'" alt="Product image" />
              <!-- Product details -->
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">{{ producto.titulo }}</h5>
                </div>
              </div>
              <!-- Product actions -->
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a :href="producto.url" class="btn btn-outline-dark mt-auto text-uppercase">Ver más</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterComponent />-->
  </template>

  <style scoped>
  .bg-img-product {
    background-image: url('/img/bg-img-product.jpg'); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    color: #fff8ea !important;
  }
  .title-hero-product {
		font-family: 'Playfair Display', serif;
	}
  .card-img-top {
    height: 300px;
    object-fit: cover;
  }
  </style>
  