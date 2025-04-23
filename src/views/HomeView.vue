<script setup lang="ts">
  import CarouselProducts from '../components/CarouselProducts.vue';
  import HeaderComponent from '../components/HeaderComponent.vue';
  import FooterComponent from '../components/FooterComponent.vue';
  import ContactComponent from '../components/ContactComponent.vue';

</script>

<template>
  <HeaderComponent />
  <section>
    <div id="mainCarousel" class="carousel slide carousel-fade">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container-fluid bg-item-1">
            <div class="container px-lg-5">
              <div class="row flex-lg-row-reverse align-items-start px-lg-5">
                <div class="col-10 mx-auto col-sm-8 col-lg-6">
                  <img src="/img/img-carousel-1.avif" class="d-block mx-lg-auto img-fluid carousel-img" alt="Imagen 1" loading="lazy">
                </div>
                <div class="col-lg-6">
                  <div class="lc-block mb-3 text-center">
                    <img src="/img/logo-terro.avif" class="d-block mx-auto img-fluid mb-3" alt="Logo" loading="lazy">
                  </div>
                  <div class="lc-block mb-3 text-center">
                    <p class="lead fs-5">Si es de barro, nosotros lo tenemos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container-fluid bg-item-2">
            <div class="container px-lg-5">
              <div class="row flex-lg-row-reverse align-items-start px-lg-5 text-center">
                <div class="col-10 mx-auto col-sm-8 col-lg-6">
                  <img src="/img/img-carousel-2.avif" class="d-block mx-lg-auto img-fluid carousel-img" alt="Imagen 2" />
                </div>
                <div class="col-lg-6">
                  <div class="lc-block mb-3 pt-lg-5 mt-lg-5">
                    <h2 class="title-carousel">Disfruta de los <br> clásicos</h2>
                  </div>
                  <div class="lc-block mb-3">
                    <img src="/img/img-product-carousel-2.avif" class="d-none d-lg-block  img-fluid mb-3 mx-auto" alt="Producto 2" />
                  </div>
                  <div class="pt-3">
                    <p class="fs-6 text-uppercase text-decoration-underline letter-spacing">Teja Renacimiento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container-fluid bg-item-3">
            <div class="container px-lg-5">
              <div class="row d-flex align-items-start px-lg-5 text-center">
                <div class="col-10 mx-auto col-sm-8 col-lg-6">
                  <img src="/img/img-carousel-3.avif" class="d-block mx-lg-auto img-fluid carousel-img" alt="Imagen 3" />
                </div>
                <div class="col-lg-6">
                  <div class="lc-block mb-3 pt-lg-5 mt-lg-5">
                    <h2 class="title-carousel">La elegancia <br>está en los <br>detalles</h2>
                  </div>
                  <div class="lc-block mb-3">
                    <img src="/img/img-product-carousel-3.avif" class="d-none d-lg-block  mx-auto img-fluid mb-3" alt="Producto 3" />
                  </div>
                  <div class="pt-3">
                    <p class="fs-6 text-uppercase text-decoration-underline letter-spacing">Teja Renacimiento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container-fluid bg-item-4">
            <div class="container px-lg-5">
              <div class="row flex-lg-row-reverse align-items-start px-lg-5 text-center">
                <div class="col-10 mx-auto col-sm-8 col-lg-6">
                  <img src="/img/img-carousel-4.avif" class="d-block mx-lg-auto img-fluid carousel-img" alt="Imagen 4" />
                </div>
                <div class="col-lg-6">
                  <div class="lc-block mb-3 pt-lg-5 mt-lg-5">
                    <h2 class="title-carousel">Tenemos para <br>todos los <br>gustos</h2>
                  </div>
                  <div class="lc-block mb-3">
                    <img src="/img/img-product-carousel-4.avif" class="d-none d-lg-block mx-auto img-fluid mb-3" alt="Producto 4" style="width: 50%;" />
                  </div>
                  <div class="pt-3">
                    <p class="fs-6 text-uppercase text-decoration-underline letter-spacing">Teja Renacimiento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span aria-hidden="true"><i class="bi bi-chevron-left bg-icon fs-1 fw-bold"></i></span>
      </button>
      <button class="btn btn-next" type="button" data-bs-target="#mainCarousel " data-bs-slide="next">
        <span aria-hidden="true"><i class="bi bi-chevron-right bg-icon fs-1 fw-bold"></i></span>
      </button>
    </div>
  </section>
  <CarouselProducts />
  <main class="main-home">
    <section class="container-fluid bg-jumbotron p-5">
      <div class="p-5 text-center">
        <h2 class="display-3 text-white text-uppercase">¿Quiénes somos?</h2>
      </div>
    </section>
    <section class="container my-5">
      <div class="p-5 text-center">
        <h4 class="title-jumbotron mb-4 display-6">¿Quiénes somos?</h4>
        <p class="mx-auto fs-5 mb-5 text-jumbotron">
          En Tejas y barro de León ofrecemos a nuestros clientes los productos de la más alta calidad, los mejores suministros del mercado y un excelente servicio al cliente en todas las etapas del proceso de compra y entrega.
        </p>
        <p class="mx-auto fs-5 mb-4 text-jumbotron">
          Estamos comprometidos a ayudarte a realizar tu proyecto de remodelación o jardinería, desde grandes obras hasta pequeñas reparaciones. Echa un vistazo a nuestro inventario y encuentra lo que necesitas.
        </p>
        <div class="d-inline-flex gap-2 mb-5">
          <button class="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
            Contacto
          </button>
        </div>
      </div>
    </section>
    <ContactComponent />
  </main>
  <FooterComponent />
</template>

<style scoped>
.bg-item-1 {
  background-color: #e8d1a7ff;
  color: #2A7C6F !important;
}

.bg-item-2 {
  background-image: url(/img/bg-item-2.avif);
  background-size: cover;
  background-repeat: no-repeat;
  color: #752800 !important;
  font-family: "Playfair Display", sans-serif !important;
}

.bg-item-3 {
  background-image: url(/img/bg-item-3.avif);
  background-size: cover;
  background-repeat: no-repeat;
  color: #0E3109 !important;
  font-family: "Playfair Display", sans-serif !important;
}

.bg-item-4 {
  background-image: url(/img/bg-item-4.avif);
  background-size: cover;
  background-repeat: no-repeat;
  color: #0A2E5A !important;
  font-family: "Playfair Display", sans-serif !important;
}

.title-carousel {
  font-size: 40px !important;
}

.letter-spacing {
  letter-spacing: 3px;
}

.carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

/* Estilos base para pantallas pequeñas */
.btn-prev,
.btn-next {
  position: absolute !important;
  top: 45%;
  background-color: transparent;
  z-index: 1;
}

/* Estilo para pantallas pequeñas: izquierda y derecha a 20px */
.btn-prev {
  left: 0;
}

.btn-next {
  right: 0;
}

/* md: ≥768px */
@media (min-width: 768px) {
  .btn-prev {
    left: 40px;
  }

  .btn-next {
    right: 40px;
  }
}

/* lg: ≥992px */
@media (min-width: 992px) {
  .btn-prev {
    left: 60px;
  }

  .btn-next {
    right: 60px;
  }
}

/* xl: ≥1200px */
@media (min-width: 1200px) {
  .btn-prev {
    left: 80px;
  }

  .btn-next {
    right: 80px;
  }
}

/* xxl: ≥1400px */
@media (min-width: 1400px) {
  .btn-prev {
    left: 100px;
  }

  .btn-next {
    right: 100px;
  }
}

.bg-icon {
  color:#ffffff !important
}

/* Breakpoint sm: ≥576px */
@media (min-width: 576px) {
  .carousel-img {
    height: 500px;
  }
}

/* Breakpoint md: ≥768px */
@media (min-width: 768px) {
  .carousel-img {
    height: 600px;
  }
}

/* Breakpoint lg: ≥992px */
@media (min-width: 992px) {
  .carousel-img {
    height: 700px;
  }
}

/* Breakpoint xl: ≥1200px */
@media (min-width: 1200px) {
  .carousel-img {
    height: 800px;
  }
}

.title-jumbotron,
.text-jumbotron {
  color: #454015 !important;
}

.btn-outline-secondary {
  border-color: #454015 !important;
  color: #454015 !important;
}

.btn-outline-secondary:hover {
  background-color: #454015 !important;
  color: #ffffff !important;
}

.bg-jumbotron {
  background-image: url(/img/img-jumbotron.avif);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
}

.main-home {
  background-color: #fff8ea !important;
}

@media (min-width: 1200px) {
  .bg-jumbotron {
    max-width: 1700px !important;
    margin: 0 auto !important;
  }
}

</style>
