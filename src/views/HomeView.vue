<script setup lang="ts">
  import CarouselProducts from '../components/CarouselProducts.vue';
  import HeaderComponent from '../components/HeaderComponent.vue';
  import FooterComponent from '../components/FooterComponent.vue';

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
      <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </section>
  <CarouselProducts />
  <section class="container-fluid bg-jumbotron p-5">
    <div class="p-5 text-center">
      <h2 class="display-3 text-white text-uppercase">¿Quiénes somos?</h2>
    </div>
  </section>
  <section class="container my-5">
    <div class="p-5 text-center">
      <h4 class="text-body-emphasis title-jumbotron mb-4">¿Quiénes somos?</h4>
      <p class="mx-auto fs-5 text-muted mb-5">
        En Tejas y barro de León ofrecemos a nuestros clientes los productos de la más alta calidad, los mejores suministros del mercado y un excelente servicio al cliente en todas las etapas del proceso de compra y entrega.
      </p>
      <p class="mx-auto fs-5 text-muted mb-4">
        Estamos comprometidos a ayudarte a realizar tu proyecto de remodelación o jardinería, desde grandes obras hasta pequeñas reparaciones. Echa un vistazo a nuestro inventario y encuentra lo que necesitas.
      </p>
      <div class="d-inline-flex gap-2 mb-5">
      <button class="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
        Contacto
      </button>
    </div>
    </div>
  </section>
  <section class="container-fluid px-4 py-1 border border-1 bg-form">
    <div class="row align-items-center g-lg-5 py-5 container mx-auto">
      <div class="col-12 col-xl-6 text-center">
        <h1 class="display-6 lh-1 text-body-emphasis mb-3 text-uppercase">¡Ponte en contacto con nostros!</h1>
        <p class="fs-6">¿Tienes un proyecto en mente y quieres saber más sobre nuestros productos? ¡Escríbenos! Nos dará gusto saber de ti.</p>
        <p class="fs-6 pt-0 mt-0 pt-lg-5 mt-lg-4">Blvd. J. J. Torres Landa Ote. 5642, Jardines de Jerez, 37530 León, Gto., México</p>
        <p class="fs-6 pt-0 mt-0 pt-lg-4">cristina.tejasybarro@gmail.com</p>
        <p class="fs-6 pt-0 mt-0 pt-lg-4">477 628 75 15</p>
      </div>
      <div class="d-none d-xl-block col-lg-1"></div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary needs-validation" novalidate>
          <div class="row g-3 mb-3">
            <div class="col-12 col-md-6">
              <label for="validationCustom01" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="validationCustom01" placeholder="Ingresa tu nombre" required>
            </div>
            <div class="col-12 col-md-6">
              <label for="validationCustom02" class="form-label">Email</label>
              <input type="email" class="form-control" id="validationCustom02" placeholder="Ingresa tu email">
            </div>
            <div class="col-12 col-md-6">
              <label for="validationCustom03" class="form-label">Teléfono</label>
              <input type="number" class="form-control" id="validationCustom03" placeholder="Ingresa tu número de teléfono" required>
            </div>
            <div class="col-12 col-md-6">
              <label for="validationCustom04" class="form-label">Dirección</label>
              <input type="text" class="form-control" id="validationCustom04" placeholder="Ingresa tu dirección" required>
            </div>
            <div class="col-12 col-md-6">
              <label for="validationCustom05" class="form-label">Producto</label>
              <input type="text" class="form-control" id="validationCustom05" placeholder="Escribe el proudcto que te interesa" required>
            </div>
            <div class="col-12 col-md-6">
              <label for="validationCustom06" class="form-label">M2</label>
              <input type="text" class="form-control" id="validationCustom06" placeholder="¿Cuántos metros?" required>
            </div>
            <div class="col-12">
              <label for="validationCustom07" class="form-label">Mensaje</label>
              <textarea class="form-control" rows="4" id="validationCustom07" placeholder="Escribe tu mensaje" required></textarea>
            </div>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  </section>
  <section class="mb-3">
    <div class="map-wrapper">
      <div class="ratio ratio-21x9">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.4236418124024!2d-101.63356112413405!3d21.095669985475947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbe47360225c3%3A0x9456856c8dce3114!2sTejas%20y%20Barro%20de%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1744862741592!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
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

.title-jumbotron {
  color: #422B1C !important;
}

.bg-jumbotron {
  background-image: url(/img/img-jumbotron.avif);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
}

.bg-form {
  background-color: #F9F1E8;
  width: 100%;
}

.map-wrapper {
  width: 100%;
}

@media (min-width: 1200px) {
  .bg-jumbotron {
    max-width: 1700px !important;
    margin: 0 auto !important;
  }
  .bg-form {
    max-width: 1700px !important;
    margin: 0 auto !important;
  }
  .map-wrapper {
    max-width: 1700px;
    margin: 0 auto; /* Centra el contenido */
  }
}

</style>
