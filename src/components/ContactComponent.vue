<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const nombre = ref('');
const telefono = ref('');
const correo = ref('');
const mensaje = ref('');
const producto = ref('Formulario de contacto');

const handleSubmit = async (e: Event) => {
  e.preventDefault();

  if (!nombre.value || !telefono.value || !correo.value || !mensaje.value) {
    Swal.fire({
      icon: 'warning',
      title: 'Campos incompletos',
      text: 'Por favor llena todos los campos antes de enviar.',
      customClass: {
        title: 'swal2-title-lg',
        popup: 'swal2-popup-lg'
      }
    });
    return;
  }

  try {
    const response = await axios.post('https://terroacabados.com/correo/formulario-contacto.php', {
      nombre: nombre.value,
      telefono: telefono.value,
      correo: correo.value,
      mensaje: mensaje.value,
      producto: producto.value,
    });

    if (response.data.success) {
      Swal.fire({
        icon: 'success',
        title: '¡Enviado!',
        text: 'Tu mensaje fue enviado con éxito.',
        customClass: {
          title: 'swal2-title-lg',
          popup: 'swal2-popup-lg'
        }
      });
      // Limpia campos
      nombre.value = '';
      telefono.value = '';
      correo.value = '';
      mensaje.value = '';
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: response.data.message || 'No se pudo enviar el formulario.',
        customClass: {
          title: 'swal2-title-lg',
          popup: 'swal2-popup-lg'
        }
      });
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      icon: 'error',
      title: 'Error del servidor',
      text: 'Ocurrió un problema al enviar tu mensaje.',
      customClass: {
        title: 'swal2-title-lg',
        popup: 'swal2-popup-lg'
      }
    });
  }
};

</script>

<template>
	<section class="container-fluid">
		<div class="container w-75">
			<div class="row align-items-center g-5 g-xl-0">
				<div class="col-12 col-xl-6">
					<div class="p-4 d-flex align-items-start gap-3 fs-4">
						<i class="bi bi-geo-alt fs-1"></i>
						<p class="mb-0 ms-4">
							Blvd. J. J. Torres Landa Ote. 5642, Jardines <br> de Jerez, 37530 León, Gto., México
						</p>
					</div>
					<div class="p-4 d-flex align-items-start gap-3 fs-4">
						<i class="bi bi-telephone fs-1"></i>
						<a href="tel:+524776287515" class="mb-0 ms-4 text-decoration-none text-phone">
							477 628 7515
						</a>
					</div>
					<div class="p-4 d-flex align-items-start gap-3 fs-4">
						<i class="bi bi-envelope fs-1"></i>
						<a href="mailto:contacto@terroacabados.com" class="mb-0 ms-4 text-decoration-none text-email">
							contacto@terroacabados.com
						</a>
					</div>
					<div class="d-flex gap-3 container ms-5 ps-5">
						<a href="#" class="text-dark fs-4"><i class="icon-footer bi bi-facebook fs-1 ms-5"></i></a>
						<a href="#" class="text-dark fs-4"><i class="icon-footer bi bi-instagram fs-1"></i></a>
						<a href="#" class="text-dark fs-4"><i class="icon-footer bi bi-whatsapp fs-1"></i></a>
					</div>
				</div>
				<div class="col-12 col-xl-6">
					<form class="p-4 p-md-5 needs-validation" novalidate @submit="handleSubmit">
						<div class="row g-4 mb-3">
							<div class="col-12 col-md-6">
								<label for="nombre" class="form-label fs-4">Nombre</label>
								<input type="text" class="form-control rounded-0" id="nombre" v-model="nombre" required />
							</div>
							<div class="col-12 col-md-6">
								<label for="telefono" class="form-label fs-4">Teléfono</label>
								<input type="tel" class="form-control rounded-0" id="telefono" v-model="telefono" required />
							</div>
							<div class="col-12">
								<label for="correo" class="form-label fs-4">Email</label>
								<input type="email" class="form-control fs-4" id="correo" v-model="correo" required />
							</div>
							<div class="col-12">
								<label for="validationCustom07" class="form-label fs-4">Mensaje</label>
								<textarea class="form-control fst-italic fs-6 text-area-color" rows="5" id="validationCustom07" v-model="mensaje" required></textarea>
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
</template>

<style scoped>
	.text-phone,
  .text-email {
    color: #454015 !important;
  }

  input {
    height: 40px;
    background-color: #fff8ea !important;
    color: #454015 !important;
    border: 1px solid #454015 !important;
  }

  .text-area-color {
    background-color: #fff8ea !important;
    color: #454015 !important;
    border: 1px solid #454015 !important;
    resize: vertical;
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