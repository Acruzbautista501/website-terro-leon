<script setup lang="ts">
  import HeaderComponent from '../components/HeaderComponent.vue';
  import FooterComponent from '../components/FooterComponent.vue';
  import ContactComponentMain from '../components/ContactComponentMain.vue';
  import { imperdibles, puntos } from '../data/productos';

</script>

<template>
  <HeaderComponent />
  <section class="hero d-flex align-items-center justify-content-center text-center">
    <div class="overlay-box rounded shadow">
      <h1 class="mb-2 text-white text-uppercase title-hero-home display-4">Tejas y Barro se transforma</h1>
      <p class="mb-0 text-white fs-4">Bienvenido a esta nueva era</p>
      <div class="logo">
        <img src="/img/logo-terro-brown.png" alt="" class="img-fluid" style="width: 300px;;">
      </div>
    </div>
  </section>

  <section class="text-center py-5 bg-section">
    <div class="container">
      <p class="fs-3 container w-75">
        En TERRO creemos que cada proyecto es una historia que merece ser bien contada. Por eso, te acompañamos con
        materiales naturales, diseño con alma y un toque muy nuestro, para que transformar tu espacio sea tan emocionante como imaginarlo.
      </p>
      <div class="divider"></div>
      <h3 class="slogan text-uppercase display-3">Si es de barro, Nosotros lo tenemos</h3>
    </div>
  </section>
  <main class="main-home">
    <section class="container-fluid bg-jumbotron p-5">
      <div class="container w-75">
        <div class="row g-5">
          <div class="col-12 col-md-6 col-xl-3 my-5 py-5">
            <h2 class="title-jumbotron display-4 text-uppercase">Nuestros imperdibles</h2>
            <p class="text-jumbotron fs-4">
              Explora lo mejor de TERRO y encuentra justo lo que tu proyecto necesita.
            </p>
            <div class="border-bottom border-2 w-75 pt-3 mb-3"></div>
            <div class="d-inline-flex pt-3 mx-5">
              <router-link class="btn btn-outline-secondary btn-lg px-4 rounded-pill text-uppercase" type="button" to="/productos">
                Ver todos
              </router-link>
            </div>
          </div>
          <div v-for="(imperdible, index) in imperdibles" :key="index" class="col-12 col-md-6 col-xl-3">
            <div class="card h-100 bg-transparent border-0">
              <img class="card-img-top img-jumbotron" :src="imperdible.img" :alt="imperdible.titulo">
              <div class="card-body p-4">
                <div class="text-center">
                  <p class="text-uppercase fs-3 text-white">{{ imperdible.titulo }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid p-5 color-text">
      <div class="container w-75">
        <div class="pt-3 pb-2">
          <h2 class="title-jumbotron display-4 text-uppercase">Inspírate y aprende con Nosotros</h2>
          <p class="text-jumbotron fs-4">
            Visita nuestra sección de recursos y descubre guías, videos e ideas para hacer de tu proyecto una obra maestra.
          </p>
        </div>
        <div class="row g-5">
          <div v-for="(punto, index) in puntos" :key="index" class="col-12 col-md-6 col-xl-3">
            <div class="card h-100 bg-transparent border-0">
              <router-link :to="punto.url">
                <img class="card-img-top" :src="punto.img" alt="img-punto">
              </router-link>
              <div class="card-body p-4">
                <div class="text-center">
                  <p class="fs-4 fst-italic">{{ punto.descripcion }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactComponentMain />
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
    font-family: 'Cormorant', serif;
  }

  .title-hero-home,
  .title-jumbotron {
		font-family: 'Cormorant', serif;
	}

  .text-jumbotron {
    text-align: justify;
  }

  .btn-outline-secondary {
    background-color: #454015 !important;
    color: #ffffff !important;
    width: 150px;
    padding: 12px;
  }

  .btn-outline-secondary:hover {
    background-color: #fff8ea !important;
    color: #454015 !important;
    border: 1px solid #454015 !important;
  }

  .bg-jumbotron {
    background-color: #9d9167;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    color: #fff8ea !important;
  }

  .img-jumbotron {
      height: 300px;
      object-fit: cover;
  }
 
  @media(min-width: 1200px) and (max-width: 1450px) {
    .img-jumbotron {
      height: 245px;
  }
  }

  .color-text {
    color: #454015 !important;
  }

  .main-home {
    background-color: #fff8ea !important;
  }

</style>
