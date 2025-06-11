<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import HeaderComponent from '../../../components/HeaderComponent.vue';
import ProductCarousel from '../../../components/ProductCarousel.vue';
import FooterComponent from '../../../components/FooterComponent.vue';
import { canteras } from '../../../data/products/canteras';
import { useQuoteStore } from '../../../stores/quoteStore';
import Swal from 'sweetalert2';

const quoteStore = useQuoteStore();
const route = useRoute();
const tipo = route.params.tipo as keyof typeof canteras;
const slug = route.params.slug as string;

const cantera = ref<any>(null);
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
  const lista = canteras[tipo];
  if (lista && Array.isArray(lista)) {
    const match = lista.find(f => slugify(f.titulo) === slug);
    cantera.value = match;
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
  if (cantera.value && selectedImage.value) {
    quoteStore.addToQuote({
      id: cantera.value.id || `${tipo}-${slug}`,
      name: cantera.value.titulo,
      color: getColorNameFromPath(selectedImage.value)
    });

    Swal.fire({
      icon: 'success',
      title: 'Agregado a la cotización',
      html: `<strong>${cantera.value.titulo}</strong><br>Color: ${getColorNameFromPath(selectedImage.value)}`,
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
  <main v-if="cantera" class="main-bg">
    <section class="container py-5">
      <div class="mb-4">
        <router-link
          to="/productos/canteras"
          class="d-inline-flex align-items-center gap-2 fs-2 text-decoration-none text-back text-infor text-uppercase"
        >
          <i class="bi bi-arrow-left-circle"></i> Volver
        </router-link>
      </div>
      <div class="row g-3">
        <div class="col-12 col-xl-6">
          <ProductCarousel
            v-if="cantera"
            :carouselId="`carousel-${tipo}-${slug}`"
            :images="[selectedImage || '/img/placeholder.jpg']"
            :title="cantera.titulo"
          />
        </div>
        <div class="col-12 col-xl-6">
          <div class="mt-4 mb-5">
            <h1 class="text-center text-uppercase display-4">{{ cantera.titulo }}</h1>
          </div>

          <div v-if="cantera?.img?.length >= 1" class="mb-4">
            <label class="form-label fs-3 fw-bold">Selecciona un color:</label>
            <div class="row g-2">
              <div
                class="col-6 col-sm-4"
                v-for="(img, index) in cantera.img"
                :key="index"
              >
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
                  <span class="text-uppercase">{{ getColorNameFromPath(img) }}</span>
                </button>
              </div>
            </div>
          </div>

          <div class="container mt-3 pt-3">
            <p class="fs-3" v-if="cantera.medidas"><span class="fw-bold">Medidas:</span> {{ cantera.medidas }}</p>
            <p class="fs-3" v-if="cantera.largo"><span class="fw-bold">Largo:</span> {{ cantera.largo }}</p>
            <p class="fs-3" v-if="cantera.ancho"><span class="fw-bold">Ancho:</span> {{ cantera.ancho }}</p>
            <p class="fs-3" v-if="cantera.espesor"><span class="fw-bold">Espesor:</span> {{ cantera.espesor }}</p>
            <p class="fs-3" v-if="cantera.contenido"><span class="fw-bold">Contenido:</span> {{ cantera.contenido }}</p>
            <p class="fs-3" v-if="cantera.cubre"><span class="fw-bold">Cubre:</span> {{ cantera.cubre }}</p>
            <p class="fs-3" v-if="cantera.pesoxCaja"><span class="fw-bold">Peso por caja:</span> {{ cantera.pesoxCaja }}</p>
            <p class="fs-3" v-if="cantera.margenVariacion"><span class="fw-bold">Margen de variación:</span> {{ cantera.margenVariacion }}</p>
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
            *Al ser productos de origen natural, los tonos y colores aquí mostrados pueden tener sutiles variaciones inherentes a los productos de cantera. El color mostrado de los productos varía de acuerdo al brillo de cada pantalla.
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
