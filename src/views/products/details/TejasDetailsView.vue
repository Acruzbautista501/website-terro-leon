<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import HeaderComponent from '../../../components/HeaderComponent.vue';
import ProductCarousel from '../../../components/ProductCarousel.vue';
import FooterComponent from '../../../components/FooterComponent.vue';
import { tejas } from '../../../data/products/tejas';

const route = useRoute();
const tipo = route.params.tipo as keyof typeof tejas;
const slug = route.params.slug as string;

defineProps<{}>();

const teja = ref<any>(null);
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
  const lista = tejas[tipo];
  if (lista && Array.isArray(lista)) {
    const match = lista.find(t => slugify(t.titulo) === slug);
    teja.value = match;
    if (match?.img?.length) {
      selectedImage.value = match.img[0];
    }
  }
});

function getColorNameFromPath(path: string): string {
  const fileName = path.split('/').pop() ?? '';
  return fileName.replace(/\.(webp|jpg|jpeg|png)$/, '').replace(/[-_]/g, ' ');
}
</script>

<template>
  <HeaderComponent />
  <main v-if="teja" class="main-bg">
    <section class="container py-5">
      <div class="mb-4">
        <router-link
          to="/productos/tejas"
          class="d-inline-flex align-items-center gap-2 fs-2 text-decoration-none text-back text-uppercase text-infor"
        >
        <i class="bi bi-arrow-left-circle"></i> Volver
        </router-link>
      </div>
      <div class="row g-3">
        <div class="col-12 col-xl-6">
          <ProductCarousel
            v-if="teja"
            :carouselId="`carousel-${teja.id}`"
            :images="[selectedImage || '/img/placeholder.jpg']"
            :title="teja.titulo"
          />
        </div>
        <div class="col-12 col-xl-6">
          <div class="mt-4 mb-5">
            <h1 class="text-center">{{ teja.titulo }}</h1>
          </div>

          <!-- Selector de color con miniatura circular -->
          <div v-if="teja?.img?.length > 1" class="mb-4">
            <label class="form-label fs-3 fw-bold">Selecciona un color:</label>
            <div class="row g-2">
              <div
                class="col-6 col-sm-4"
                v-for="(img, index) in teja.img"
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
                  <span class="text-capitalize">{{ getColorNameFromPath(img) }}</span>
                </button>
              </div>
            </div>
          </div>
          <div class="container mt-3 pt-3">
            <p class="fs-3" v-if="teja.medidas"><span class="fw-bold">Medidas:</span> {{ teja.medidas }}</p>
            <p class="fs-3" v-if="teja.piezasxM2"><span class="fw-bold">Piezas/m²:</span> {{ teja.piezasxM2 }} piezas</p>
            <p class="fs-3" v-if="teja.peso"><span class="fw-bold">Peso:</span> {{ teja.peso }}</p>
            <p class="fs-3" v-if="teja.descripcion"><span class="fw-bold">Descripción:</span> {{ teja.descripcion }}</p>
            <p class="fs-3" v-if="teja.reqInstalacion"><span class="fw-bold">Requisitos de instalación:</span> {{ teja.reqInstalacion }}</p>
            <p class="fs-3" v-if="teja.absorcion"><span class="fw-bold">Absorción:</span> {{ teja.absorcion }}</p>
            <p class="fs-3" v-if="teja.resistencia"><span class="fw-bold">Resistencia:</span> {{ teja.resistencia }}</p>
            <p class="fs-3" v-if="teja.ancho"><span class="fw-bold">Ancho:</span> {{ teja.ancho }}</p>
            <p class="fs-3" v-if="teja.largo"><span class="fw-bold">Largo:</span> {{ teja.largo }}</p>
            <p class="fs-3" v-if="teja.espesor"><span class="fw-bold">Espesor:</span> {{ teja.espesor }}</p>
            <p class="fs-3" v-if="teja.translapeMin"><span class="fw-bold">Translape mínimo:</span> {{ teja.translapeMin }}</p>
            <p class="fs-3" v-if="teja.piezasxTarima"><span class="fw-bold">Piezas por tarima:</span> {{ teja.piezasxTarima }}</p>
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


