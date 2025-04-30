<script setup lang="ts">
  import HeaderComponent from '../components/HeaderComponent.vue';
  import FooterComponent from '../components/FooterComponent.vue';
  import ContactComponent from '../components/ContactComponent.vue';

</script>

<template>
  <HeaderComponent />
  <section class="hero d-flex align-items-center justify-content-center text-center">
    <div class="overlay-box rounded shadow">
      <h2 class="mb-2 text-white text-uppercase title-hero-home display-6">Tejas y Barro se transforma</h2>
      <p class="mb-0 text-white">Bienvenido a esta nueva era</p>
      <div class="logo">
        <img src="/img/logo-terro-brown.png" alt="" class="img-fluid" style="width: 300px;;">
      </div>
    </div>
  </section>

  <section class="text-center py-5 bg-section">
    <div class="container">
      <p class="fs-5">
        En TERRO creemos que cada proyecto es una historia que merece ser bien contada. Por eso, te acompañamos con
        materiales naturales, diseño con alma y un toque muy nuestro, para que transformar tu espacio sea tan emocionante como imaginarlo.
      </p>
      <div class="divider"></div>
      <h3 class="slogan">SI ES DE BARRO, NOSOTROS LO TENEMOS</h3>
    </div>
  </section>
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
  .hero {
    background-image: url('/img/img-hero-home.avif'); /* Reemplaza con la ruta de tu imagen */
    background-size: cover;
    background-position: center;
    height: 60vh;
    position: relative;
    color: #FFFFFF;
  }

  .overlay-box {
    background-color: rgba(175, 175, 175, 0.3); /* color crema más transparente */
    backdrop-filter: blur(5px);               /* difuminado tipo frosted glass */
    -webkit-backdrop-filter: blur(5px);       /* soporte para Safari */
    padding: 3rem;
    text-align: center;
    color: #3e2e20;
    border-radius: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
}

  .divider {
    width: 1px;
    height: 60px;
    background-color: #454015 !important;
    margin: 2rem auto;
  }

  .bg-section {
    background-color: #fff8ea;
    color: #454015;
  }

  .slogan {
    font-size: 2rem;
    font-family: 'Playfair Display', serif;
  }

  .title-hero-home {
		font-family: 'Playfair Display', serif;
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
