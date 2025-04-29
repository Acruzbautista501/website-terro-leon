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
  <section class="bg-img-product py-5 position-relative">
    <div class="position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(0, 0, 0, 0.5);"></div>
    <div class="container px-4 px-lg-5 my-5 position-relative">
      <div class="text-center">
        <h1 class="display-3 title-hero-product">Tejas que Protegen y Embellecen tu Idea</h1>
        <p class="lead mb-0">
          Variedad de tejas resistentes, duraderas y con estilo.
        </p>
      </div>
    </div>
  </section>

  <main class="carousel-grid">
    <!-- Delcon -->
    <section class="carousel-section">
      <h3 class="display-4 title-brand">Tejas Delcon</h3>
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
      <h3 class="display-4 title-brand">Tejas Águila</h3>
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
      <h3 class="display-4 title-brand">Tejas IKO</h3>
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
      <h3 class="display-4 title-brand">Tejas Mextile</h3>
      <ProductCarousel
        v-for="(teja) in mextile"
        :key="teja.id"
        :carouselId="`carousel-${teja.id}`"
        :images="teja.img.length > 0 ? teja.img : ['/img/placeholder.jpg']"
        :title="teja.titulo"
      />
    </section>
  </main>

  <FooterComponent />
</template>



<style scoped>
 *, *::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
main.carousel-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  justify-content: center;
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

.bg-img-product {
    background-image: url('/img/backgound-tejas.avif'); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    color: #fff8ea !important;
  }
  .title-hero-product {
		font-family: 'Playfair Display', serif;
	}
  .carousel-section {
  display: contents; /* Para no romper el grid */
}

.title-brand {
  grid-column: 1 / -1; /* Hace que el h3 ocupe todo el ancho en el grid */
  margin: 40px 0 20px;
  color: #454015 !important;
  font-family: 'Playfair Display', serif;
  text-align: center;
}

</style>