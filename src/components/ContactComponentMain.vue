<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

// Campos del formulario
const nombre = ref('')
const telefono = ref('')
const correo = ref('')
const mensaje = ref('')
const producto = ref('Formulario de contacto') // Valor estático, puede cambiar

const enviarFormulario = async () => {
  if (!nombre.value || !telefono.value || !correo.value || !mensaje.value) {
    Swal.fire({
      icon: 'warning',
      title: 'Campos incompletos',
      text: 'Por favor llena todos los campos antes de enviar.'
    })
    return
  }

  try {
    const response = await axios.post('https://terroacabados.com/correo/formulario-contacto.php', {
      nombre: nombre.value,
      telefono: telefono.value,
      correo: correo.value,
      mensaje: mensaje.value,
      producto: producto.value,
    })

    if (response.data.success) {
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: response.data.message,
      })

      // Limpiar campos
      nombre.value = ''
      telefono.value = ''
      correo.value = ''
      mensaje.value = ''
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: response.data.message,
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error de conexión',
      text: 'No se pudo enviar el formulario. Inténtalo más tarde.',
    })
  }
}

</script>

<template>
  <section class="container-fluid bg-form text-white p-5">
    <div class="container w-75">
      <div class="row align-items-center g-5 g-xl-0">
        <div class="col-12 col-xl-6 text-start">
          <div class="border-bottom border-2 w-50 pt-3"></div>
            <div class="mb-3">
              <h2 class="display-4 text-uppercase title-contact">
                ¡Ven y Descubre <img src="/img/logo-terro-white.png" alt="" class="w-25">!
              </h2>
            </div>
            <p class="fs-3 w-75">
              Visítanos en nuestra tienda y explora todo lo que tenemos para ofrecerte.
            </p>
            <p class="fs-3">
              ¡Nos encantará ayudarte a construir tus sueños!
            </p>
            <div class="d-none d-xl-block ratio ratio-1x1 w-75">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.423766766542!2d-101.63098620000001!3d21.095665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbe47360225c3%3A0x9456856c8dce3114!2sTejas%20y%20Barro%20de%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1746140245997!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen aloading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="d-block d-xl-none ratio ratio-1x1">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.423766766542!2d-101.63098620000001!3d21.095665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbe47360225c3%3A0x9456856c8dce3114!2sTejas%20y%20Barro%20de%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1746140245997!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen aloading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div class="col-12 col-xl-6 pt-5">
          <div class="text-end">
            <h3 class="display-5 text-uppercase title-contact">
              Tu proyecto merece antención personalizada.
            </h3>
            <p class="fs-3">
              Escríbenos y con gusto te ayudamos. En TERRO estamos para acompañarte en cada paso
            </p>
          </div>
          <form class="p-4 p-md-5 needs-validation" @submit.prevent="enviarFormulario">
            <div class="row g-4 mb-3">
              <div class="col-12 col-md-6">
                <label for="nombre" class="form-label fs-4">Nombre</label>
                <input type="text" v-model="nombre" class="form-control rounded-0" id="nombre" required>
              </div>
              <div class="col-12 col-md-6">
                <label for="telefono" class="form-label fs-4">Teléfono</label>
                <input type="tel" v-model="telefono" class="form-control rounded-0" id="telefono" required>
              </div>
              <div class="col-12">
                <label for="correo" class="form-label fs-4">Email</label>
                <input type="email" v-model="correo" class="form-control fs-4" id="correo" required>
              </div>
              <div class="col-12">
                <label for="mensaje" class="form-label fs-4">Mensaje</label>
                <textarea v-model="mensaje" class="form-control fst-italic fs-6" rows="5" id="mensaje" placeholder="¿Requieres una cotización o no encontraste lo que buscabas?. Dinos cómo podemos ayudarte" required></textarea>
              </div>
            </div>
            <div class="text-end pt-4">
              <button class="btn btn-lg btn-form rounded-0 fs-5" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section>
  </section>
</template>

<style scoped>
.bg-form {
  background-color: #9d9167;
  width: 100%;
}

.title-contact {
  font-family: 'Cormorant', serif;
}

input {
  height: 40px;
}

.btn-form {
  background-color: #454015 !important;
  color: #fff8ea !important;
  width: 120px;
  padding: 8px;
}

.btn-form:hover {
  background-color: #fff8ea !important;
  color: #454015 !important;
  border: 1px solid #454015 !important;
}
</style>