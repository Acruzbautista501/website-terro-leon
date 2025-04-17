<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { productos as dataProductos } from '../data/productos';
	import type { Producto } from '../interfaces/Producto';

	const productos = ref(dataProductos);

	// Agrupar productos por 4 para mostrarlos en cada slide
	const productosAgrupados = computed<Producto[][]>(() => {
		const grupos: Producto[][] = [];
		for (let i = 0; i < productos.value.length; i += 4) {
			grupos.push(productos.value.slice(i, i + 4));
		}
		return grupos;
	});
</script>

<template>
  <section class="p-5 bg-section-carousel">
    <div id="carouselProductos" class="carousel slide">
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(grupo, index) in productosAgrupados"
          :class="{ active: index === 0 }"
          :key="index"
        >
          <div class="row g-3">
            <div
              class="col-12 col-sm-6 col-lg-3"
              v-for="(producto, i) in grupo"
              :key="i"
            >
              <div class="card h-100">
                <img
                  :src="producto.imagen || '/images/default.jpg'"
                  class="card-img-top"
                  alt="Imagen del producto"
                />
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">{{ producto.nombre }}</h5>
                  <p class="card-text mb-3">
                    <strong>Precio:</strong> ${{ producto.precio }}
                    <span
                      v-if="producto.precioOriginal"
                      class="text-muted text-decoration-line-through ms-2"
                    >
                      ${{ producto.precioOriginal }}
                    </span>
                  </p>
                  <button class="btn btn-primary mt-auto">Ver producto</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controles -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselProductos"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselProductos"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.carousel-item {
  transition: transform 0.6s ease;
}


</style>