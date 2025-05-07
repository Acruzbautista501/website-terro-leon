<script lang="ts" setup>
  import ContactComponent from '../components/ContactComponent.vue';
  import FooterComponent from '../components/FooterComponent.vue';
  import HeaderComponent from '../components/HeaderComponent.vue';

</script>

<template>
	<HeaderComponent />
    <main class="main-contact">
      <section class="container-fluid">
        <div class="px-4 pt-5 pb-3 text-center">
          <div class="text-jumbotron-contact mb-5">
            <h1 class="display-4 text-uppercase">¿Tienes un proyecto en mente?</h1>
            <h4 class="display-6 text-uppercase">¡Queremos Ayudarte!</h4>
          </div>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-5 fs-3">
              En TERRO, estamos comprometidos en ofrecerte soluciones a tu medida. 
              Si deseas una cotización o tienes alguna consulta, completa el formulario 
              y nuestro equipo te atenderá personalmente.
            </p>
            <p class="lead mb-4 fs-3 fst-italic">
              Nos encantará formar parte de tu proyecto.
            </p>
          </div>
        </div>
      </section>
      <ContactComponent />
      <section class="container-fluid">
        <div class="d-none d-xl-block ratio map-container asp">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3722.423766766542!2d-101.630986!3d21.095665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbe47360225c3%3A0x9456856c8dce3114!2sTejas%20y%20Barro%20de%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1746172712032!5m2!1ses-419!2smx" width="800" height="600" style="border:0;" allowfullscreen aloading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="d-block d-xl-none ratio ratio-21x9">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3722.423766766542!2d-101.630986!3d21.095665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbe47360225c3%3A0x9456856c8dce3114!2sTejas%20y%20Barro%20de%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1746172712032!5m2!1ses-419!2smx" width="800" height="600" style="border:0;" allowfullscreen aloading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </main>
	<FooterComponent />
</template>

<style scoped>
  .main-contact {
    background-color: #fff8ea !important;
    color: #454015 !important;
  }
  .text-jumbotron-contact {
    font-family: 'Cormorant', serif;
  }
  .map-container iframe {
    height: 350px; /* Ajusta el tamaño como lo necesites */
  }
  .asp {
    --bs-aspect-ratio: 24%;
  }

</style>