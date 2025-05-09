<script lang="ts" setup>
import { ref } from 'vue';

// Props
const props = defineProps<{
  images: string[];
  title: string;
  carouselId: string; // Nuevo: cada carrusel tendrá su propio id
}>();

// Estado
const currentIndex = ref(0);

</script>

<template>
  <div class="carousel-wrapper">
    <!-- Imagen principal -->
    <div :id="`mainCarousel-${props.carouselId}`" class="carousel slide carousel-fade mb-5">
      <section class="carousel-inner">
        <div
          v-for="(image, index) in props.images"
          :key="index"
          :class="['carousel-box', 'carousel-item', 'shadow-sm', 'rounded', { active: currentIndex === index }]"
        >
          <img :src="image" class="d-block w-100" alt="Imagen grande" />
          <div class="pt-5 text-center"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* mismos estilos de antes */
.product-title {
  margin-top: 10px;
  color: #454015 !important;
}

.carousel-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.thumbnail-carousel-wrapper {
  position: relative;
  width: 100%;
  max-width: 400px; /* o el tamaño que quieras */
  overflow: hidden;
}


#thumbnailCarousel {
  width: auto;
  margin: 10px;
}

.carousel-inner {
  align-items: center;
}

.carousel-item {
  text-align: center;
}

.carousel-btn {
  width: 50px;
  height: 50px;
  margin: 0 5px;
  cursor: pointer;
}

button {
  background: none;
  border: none;
}

button img {
  width: 100%;
  object-fit: contain;
  padding: 0;
}

.carousel-box {
  width: 545px;
  height: 450px;
  object-fit: cover;
}

.carousel-fade .carousel-item {
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.carousel-fade .carousel-item.active {
  opacity: 1;
  position: relative;
}

.carousel-box img {
  width: 100%;
  object-fit: contain;
}

/* Responsividad usando los puntos de ruptura de Bootstrap */
@media (max-width: 575.98px) { /* xs - teléfonos pequeños */
  .carousel-box {
    width: 290px;
    height: 200px;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) { /* sm - teléfonos medianos */
  .carousel-box {
    width: 350px;
    height: 260px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) { /* md - tablets */
  .carousel-box {
    width: 420px;
    height: 330px;
  }
}

@media (min-width: 992px) and (max-width: 1440px) { /* lg - laptops */
  .carousel-box {
    width: 490px;
    height: 400px;
  }
}

/* Estilos base para pantallas pequeñas */
.btn-prev,
.btn-next {
  position: absolute !important;
  top: 10%;
  background-color: transparent;
  z-index: 1;
}

/* Estilo para pantallas pequeñas: izquierda y derecha a 20px */
.btn-prev {
  left: -1px;
}

.btn-next {
  right: -1px;
}

@media (min-width: 321px) and (max-width: 374px) {
  .btn-prev {
    left: 8px;
  }

  .btn-next {
    right: 8px;
  }
}

@media (min-width: 375px) and (max-width: 500px) {
  .btn-prev {
    left: 20px;
  }

  .btn-next {
    right: 20px;
  }
}


/* md: ≥768px */
@media (min-width: 768px) {
  .btn-prev {
    left: 20px;
  }

  .btn-next {
    right: 20px;
  }
}

/* lg: ≥992px */
@media (min-width: 992px) {
  .btn-prev {
    left: 25px;
  }

  .btn-next {
    right: 25px;
  }
}

/* xl: ≥1200px */
@media (min-width: 1200px) {
  .btn-prev {
    left: 30px;
  }

  .btn-next {
    right: 30px;
  }
}

/* xxl: ≥1400px */
@media (min-width: 1400px) {
  .btn-prev {
    left: 40px;
  }

  .btn-next {
    right: 40px;
  }
}
</style>
