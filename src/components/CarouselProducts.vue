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
              <div class="card h-100 rounded-0 border-0">
                <img
                  :src="producto.imagen || '/images/default.jpg'"
                  class="card-img-top rounded-0 mx-auto"
                  alt="Imagen del producto"
                />
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">{{ producto.nombre }}</h5>
                  <p class="card-text mb-3">
                    ${{ producto.precio }}
                    <span
                      v-if="producto.precioOriginal"
                      class="text-muted text-decoration-line-through ms-2"
                    >
                      ${{ producto.precioOriginal }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controles -->
      <button class="btn btn-prod-prev" type="button" data-bs-target="#carouselProductos" data-bs-slide="prev">
        <span aria-hidden="true"><i class="bi bi-chevron-left bg-prod-icon fs-5 fw-bold"></i></span>
      </button>
      <button class="btn btn-prod-next" type="button" data-bs-target="#carouselProductos" data-bs-slide="next">
        <span aria-hidden="true"><i class="bi bi-chevron-right bg-prod-icon fs-5 fw-bold"></i></span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.bg-section-carousel {
  background-color: #fff8ea;
}
.carousel-item {
  transition: transform 0.6s ease;
}

/* Estilos base para pantallas pequeñas */
.btn-prod-prev,
.btn-prod-next {
  position: absolute !important;
  top: 45%;
  background-color: transparent;
  z-index: 1;
}

/* Estilo para pantallas pequeñas: izquierda y derecha a 20px */
.btn-prod-prev {
  left: -45px;
}

.btn-prod-next {
  right: -45px;
}

.bg-prod-icon {
  color: #454015
}

.card-body  {
  color: #454015;
  background-color: #fff8ea;
}



</style>