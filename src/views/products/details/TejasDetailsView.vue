<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import HeaderComponent from '../../../components/HeaderComponent.vue';
import ProductCarousel from '../../../components/ProductCarousel.vue';
import FooterComponent from '../../../components/FooterComponent.vue';
import { tejas } from '../../../data/products/tejas';

const route = useRoute();
const tipo = route.params.tipo as keyof typeof tejas;
const slug = route.params.slug as string; // <--- esta línea evita el error
defineProps<{}>();


const teja = ref<any>(null);

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
    teja.value = lista.find(t => slugify(t.titulo) === slug);
  }
});


</script>

<template>
    <HeaderComponent />
    <main v-if="teja" class="main-bg">
      <section class="container py-5">
        <div class="row g-3">
            <div class="col-12 col-xl-6">
                <ProductCarousel
                    v-if="teja"
                    :carouselId="`carousel-${teja.id}`"
                    :images="teja.img.length ? teja.img : ['/img/placeholder.jpg']"
                    :title="teja.titulo"
                />
            </div>
            <div class="col-12 col-xl-6">
                <div class="mt-4 mb-5">
                    <h1 class="text-center">{{ teja.titulo }}</h1>
                </div>
                <div class="container mt-5 pt-3">
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
    .main-bg {
        background-color: #fff8ea !important;
        color: #454015 !important;
    }
    .text-infor {
        font-family: 'Cormorant', serif;
    }
</style>

