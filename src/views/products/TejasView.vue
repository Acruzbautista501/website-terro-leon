<script lang="ts" setup>
  import FooterComponent from '../../components/FooterComponent.vue';
  import HeaderComponent from '../../components/HeaderComponent.vue';
  import ProductCarousel from '../../components/ProductCarousel.vue';
  import { tejas } from '../../data/products/tejas';

  const delcon = tejas.delcon
  const aguila = tejas.aguila;
  const iko = tejas.iko;
  const mextile = tejas.mextile


</script>

<template>
  <HeaderComponent />
  <section class="container-fluid bg-color">
    <div class="p-5 text-center container">
        <div class="text-center py-4">
            <h1 class="title-hero-product mb-4 display-1 text-uppercase">Tejas</h1>
        </div>
    </div>
  </section>

  <main class="carousel-grid">
    <!-- Delcon -->
    <section class="carousel-section">
      <ProductCarousel
        v-for="(teja) in delcon"
        :key="teja.id"
        :carouselId="`carousel-${teja.id}`"
        :images="teja.img.length > 0 ? teja.img : ['/img/placeholder.jpg']"
        :title="teja.titulo"
      />
    </section>

    <!-- Aguila -->
    <section class="carousel-section">
      <ProductCarousel
        v-for="(teja) in aguila"
        :key="teja.id"
        :carouselId="`carousel-${teja.id}`"
        :images="teja.img.length > 0 ? teja.img : ['/img/placeholder.jpg']"
        :title="teja.titulo"
      />
    </section>

    <!-- IKO -->
    <section class="carousel-section">
      <ProductCarousel
        v-for="(teja) in iko"
        :key="teja.id"
        :carouselId="`carousel-${teja.id}`"
        :images="teja.img.length > 0 ? teja.img : ['/img/placeholder.jpg']"
        :title="teja.titulo"
      />
    </section>

    <!-- Mextile -->
    <section class="carousel-section">
      <ProductCarousel
        v-for="(teja) in mextile"
        :key="teja.id"
        :carouselId="`carousel-${teja.id}`"
        :images="teja.img.length > 0 ? teja.img : ['/img/placeholder.jpg']"
        :title="teja.titulo"
      />
    </section>
  </main>
  <section class="container-fluid bg-color">
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
  <FooterComponent />
</template>

<style scoped>
 *, *::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
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
  
  main.carousel-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
    justify-content: center;
    background-color: #fff8ea !important;
    color: #454015 !important;
  }

  @media (max-width: 1700px) {
    main.carousel-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 1200px) {
    main.carousel-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    main.carousel-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .title-hero-product,
  .text-infor {
    font-family: 'Playfair Display', serif;
  }
    .carousel-section {
    display: contents; /* Para no romper el grid */
  }

</style>