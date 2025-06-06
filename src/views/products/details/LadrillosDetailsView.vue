<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import HeaderComponent from '../../../components/HeaderComponent.vue';
import ProductCarousel from '../../../components/ProductCarousel.vue';
import FooterComponent from '../../../components/FooterComponent.vue';
import { ladrillos } from '../../../data/products/ladrillos';
import { useQuoteStore } from '../../../stores/quoteStore';
import Swal from 'sweetalert2';

const quoteStore = useQuoteStore();
const route = useRoute();
const tipo = route.params.tipo as keyof typeof ladrillos;
const slug = route.params.slug as string;

const ladrillo = ref<any>(null);
const selectedImage = ref<string | null>(null);

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .trim();
}

onMounted(() => {
  const lista = ladrillos[tipo];
  if (lista && Array.isArray(lista)) {
    const match = lista.find(l => slugify(l.titulo) === slug);
    ladrillo.value = match;
    if (match?.img?.length) {
      selectedImage.value = match.img[0];
    }
  }
});

function getColorNameFromPath(path: string): string {
  const fileName = path.split('/').pop() ?? '';
  return fileName.replace(/\.(webp|jpg|jpeg|png)$/, '').replace(/[-_]/g, ' ');
}

function cotizarProducto() {
  if (ladrillo.value && selectedImage.value) {
    quoteStore.addToQuote({
      id: `${tipo}-${slug}`,
      name: ladrillo.value.titulo,
      color: getColorNameFromPath(selectedImage.value)
    });

    Swal.fire({
      icon: 'success',
      title: 'Agregado a la cotización',
      html: `<strong>${ladrillo.value.titulo}</strong><br>Color: ${getColorNameFromPath(selectedImage.value)}`,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        title: 'swal2-title-lg',
        popup: 'swal2-popup-lg'
      }
    });
  }
}
</script>

<template>
  <HeaderComponent />
  <main v-if="ladrillo" class="main-bg">
    <section class="container py-5">
      <div class="mb-4">
        <router-link
          to="/productos/ladrillos"
          class="d-inline-flex align-items-center gap-2 fs-2 text-decoration-none text-back text-uppercase text-infor"
        >
          <i class="bi bi-arrow-left-circle"></i> Volver
        </router-link>
      </div>
      <div class="row g-3">
        <div class="col-12 col-xl-6">
          <ProductCarousel
            v-if="ladrillo"
            :carouselId="`carousel-${tipo}-${slug}`"
            :images="[selectedImage || '/img/placeholder.jpg']"
            :title="ladrillo.titulo"
          />
        </div>
        <div class="col-12 col-xl-6">
          <div class="mt-4 mb-5">
            <h1 class="text-center text-uppercase display-4">{{ ladrillo.titulo }}</h1>
          </div>

          <div v-if="ladrillo?.img?.length > 1" class="mb-4">
            <label class="form-label fs-3 fw-bold">Selecciona un color:</label>
            <div class="row g-2">
              <div class="col-6 col-sm-4" v-for="(img, index) in ladrillo.img" :key="index">
                <button
                  class="btn btn-outline-secondary btn-sm w-100 d-flex align-items-center gap-2 fs-5"
                  :class="{ 'active': img === selectedImage }"
                  @click="selectedImage = img"
                >
                  <img
                    :src="img"
                    alt="Color miniatura"
                    width="30"
                    height="30"
                    class="rounded-circle border"
                  />
                  <span class="text-capitalize">{{ getColorNameFromPath(img) }}</span>
                </button>
              </div>
            </div>
          </div>

          <div class="container mt-3 pt-3">
            <p class="fs-3" v-if="ladrillo.medidas"><span class="fw-bold">Medidas:</span> {{ ladrillo.medidas }}</p>
            <p class="fs-3" v-if="ladrillo.largo"><span class="fw-bold">Largo:</span> {{ ladrillo.largo }}</p>
            <p class="fs-3" v-if="ladrillo.ancho"><span class="fw-bold">Ancho:</span> {{ ladrillo.ancho }}</p>
            <p class="fs-3" v-if="ladrillo.espesor"><span class="fw-bold">Espesor:</span> {{ ladrillo.espesor }}</p>
            <p class="fs-3" v-if="ladrillo.contenido"><span class="fw-bold">Contenido:</span> {{ ladrillo.contenido }}</p>
            <p class="fs-3" v-if="ladrillo.cubre"><span class="fw-bold">Cubre:</span> {{ ladrillo.cubre }}</p>
            <p class="fs-3" v-if="ladrillo.juntaRecom"><span class="fw-bold">Junta recomendada:</span> {{ ladrillo.juntaRecom }}</p>
            <p class="fs-3" v-if="ladrillo.pesoxCaja"><span class="fw-bold">Peso por caja:</span> {{ ladrillo.pesoxCaja }}</p>
            <p class="fs-3" v-if="ladrillo.pesoxPzas"><span class="fw-bold">Peso por pieza:</span> {{ ladrillo.pesoxPzas }}</p>
            <p class="fs-3" v-if="ladrillo.pzasxM2"><span class="fw-bold">Piezas por m²:</span> {{ ladrillo.pzasxM2 }}</p>
            <p class="fs-3" v-if="ladrillo.pesoxM2"><span class="fw-bold">Peso por m²:</span> {{ ladrillo.pesoxM2 }}</p>
            <p class="fs-3" v-if="ladrillo.resistencia"><span class="fw-bold">Resistencia:</span> {{ ladrillo.resistencia }}</p>
            <p class="fs-3" v-if="ladrillo.blockxTar"><span class="fw-bold">Block por tarima:</span> {{ ladrillo.blockxTar }}</p>
            <p class="fs-3" v-if="ladrillo.margenVariacion"><span class="fw-bold">Margen de variación:</span> {{ ladrillo.margenVariacion }}</p>
          </div>

          <div class="text-center mt-5 pt-3">
            <button
              class="btn btn-outline-secondary btn-lg px-4 py-2 fs-3 w-25"
              @click="cotizarProducto"
            >
              <i class="bi bi-file-earmark-text me-2"></i> Cotizar
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid">
      <div class="px-4 pb-3">
        <div class="col-lg-8 mx-auto text-infor">
          <p class="lead mb-5 fs-3">
            *Al ser productos de origen natural, los tonos y colores aquí mostrados pueden tener sutiles variaciones inherentes. El color puede variar según la pantalla.
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
.main-bg {
  background-color: #fff8ea !important;
  color: #454015 !important;
}
.text-infor {
  font-family: 'Cormorant', serif;
}
.text-back {
  color: #454015 !important;
}
.btn-outline-secondary {
  background-color: transparent !important;
  color: #454015 !important;
  border: 1px solid #9d9167 !important;
}
.btn-outline-secondary:hover {
  background-color: #9d9167 !important;
  color: #fff8ea !important;
  border: 1px solid #9d9167 !important;
}
</style>
