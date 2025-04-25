<script setup>
</script>

<template>
    <section class="container-fluid px-4 py-1 bg-form text-white">
        <div class="row align-items-center g-lg-5 py-5 container mx-auto">
            <div class="col-12 col-xl-5 text-center">
                <h1 class="display-6 lh-1 mb-3 text-uppercase">¡Ponte en contacto con nostros!</h1>
                <p class="fs-6">¿Tienes un proyecto en mente y quieres saber más sobre nuestros productos? ¡Escríbenos! Nos dará gusto saber de ti.</p>
                <p class="fs-6 pt-0 mt-0 pt-lg-5 mt-lg-4">Blvd. J. J. Torres Landa Ote. 5642, Jardines de Jerez, 37530 León, Gto., México</p>
                <p class="fs-6 pt-0 mt-0 pt-lg-4"><a href="mailto:contacto@terroacabados.com" class="text-decoration-none text-white">contacto@terroacabados.com</a></p>
                <p class="fs-6 pt-0 mt-0 pt-lg-4">477 628 75 15</p>
            </div>
            <div class="d-none d-xl-block col-lg-1"></div>
            <div class="col-md-10 mx-auto col-lg-6">
                <form class="p-4 p-md-5  needs-validation small" novalidate>
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
                    <input type="text" class="form-control" id="validationCustom03" placeholder="Ingresa tu número de teléfono" required>
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
                <button class="w-100 btn btn-lg text-white" type="submit">Enviar</button>
                </form>
            </div>
        </div>
  </section>
  <section>
    <div class="map-wrapper">
      <div class="ratio ratio-21x9">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.4236418124024!2d-101.63356112413405!3d21.095669985475947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbe47360225c3%3A0x9456856c8dce3114!2sTejas%20y%20Barro%20de%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1744862741592!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-form {
  background-color: #9d9167;
  width: 100%;
}

.map-wrapper {
  width: 100%;
}

@media (min-width: 1200px) {
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