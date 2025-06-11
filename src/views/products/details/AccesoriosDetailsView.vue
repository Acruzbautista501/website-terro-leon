<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import HeaderComponent from '../../../components/HeaderComponent.vue';
import ProductCarousel from '../../../components/ProductCarousel.vue';
import FooterComponent from '../../../components/FooterComponent.vue';
import { accesorios } from '../../../data/products/accesorios';
import { useQuoteStore } from '../../../stores/quoteStore';
import Swal from 'sweetalert2';

const quoteStore = useQuoteStore();

const route = useRoute();
const tipo = route.params.tipo as keyof typeof accesorios;
const slug = route.params.slug as string;

defineProps<{}>();

const accesorio = ref<any>(null);
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
  const lista = accesorios[tipo];
  if (lista && Array.isArray(lista)) {
    const match = lista.find(a => slugify(a.titulo) === slug);
    accesorio.value = match;
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
  if (accesorio.value && selectedImage.value) {
    quoteStore.addToQuote({
      id: accesorio.value.id || `${tipo}-${slug}`,
      name: accesorio.value.titulo,
      color: getColorNameFromPath(selectedImage.value)
    });

    Swal.fire({
      icon: 'success',
      title: 'Agregado a la cotización',
      html: `<strong>${accesorio.value.titulo}</strong><br>Variante: ${getColorNameFromPath(selectedImage.value)}`,
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
  <main v-if="accesorio" class="main-bg">
    <section class="container py-5">
      <div class="mb-4">
        <router-link
          to="/productos/accesorios"
          class="d-inline-flex align-items-center gap-2 fs-2 text-decoration-none text-back text-infor text-uppercase"
        >
          <i class="bi bi-arrow-left-circle"></i> Volver
        </router-link>
      </div>
      <div class="row g-3">
        <div class="col-12 col-xl-6">
          <ProductCarousel
            v-if="accesorio"
            :carouselId="`carousel-${tipo}-${slug}`"
            :images="[selectedImage || '/img/placeholder.jpg']"
            :title="accesorio.titulo"
          />
        </div>
        <div class="col-12 col-xl-6">
          <div class="mt-4 mb-5">
            <h1 class="text-center text-uppercase display-4">{{ accesorio.titulo }}</h1>
          </div>

          <div v-if="accesorio?.img?.length >= 1" class="mb-4">
            <label class="form-label fs-3 fw-bold">Selecciona variante:</label>
            <div class="row g-2">
              <div
                class="col-6 col-sm-4"
                v-for="(img, index) in accesorio.img"
                :key="index"
              >
                <button
                  class="btn btn-outline-secondary btn-sm w-100 d-flex align-items-center gap-2 fs-5"
                  :class="{ 'active': img === selectedImage }"
                  @click="selectedImage = img"
                >
                  <img
                    :src="img"
                    alt="Variante"
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
            <p class="fs-3" v-if="accesorio.medidas"><span class="fw-bold">Medidas:</span> {{ accesorio.medidas }}</p>
            <p class="fs-3" v-if="accesorio.largo"><span class="fw-bold">Largo:</span> {{ accesorio.largo }}</p>
            <p class="fs-3" v-if="accesorio.ancho"><span class="fw-bold">Ancho:</span> {{ accesorio.ancho }}</p>
            <p class="fs-3" v-if="accesorio.espesor"><span class="fw-bold">Espesor:</span> {{ accesorio.espesor }}</p>
            <p class="fs-3" v-if="accesorio.contenido"><span class="fw-bold">Contenido:</span> {{ accesorio.contenido }}</p>
            <p class="fs-3" v-if="accesorio.cubre"><span class="fw-bold">Cubre:</span> {{ accesorio.cubre }}</p>
            <p class="fs-3" v-if="accesorio.juntaRecom"><span class="fw-bold">Junta recomendada:</span> {{ accesorio.juntaRecom }}</p>
            <p class="fs-3" v-if="accesorio.pesoxCaja"><span class="fw-bold">Peso por caja:</span> {{ accesorio.pesoxCaja }}</p>
            <p class="fs-3" v-if="accesorio.margenVariacion"><span class="fw-bold">Margen de variación:</span> {{ accesorio.margenVariacion }}</p>
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
            *Los colores y variantes pueden tener ligeras variaciones según el lote de producción. Para mayor certeza, sugerimos validar físicamente las muestras en tienda.
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
