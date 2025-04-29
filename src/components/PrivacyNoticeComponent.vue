<script lang="ts" setup>
	import { onMounted, ref } from 'vue'
	import { Modal } from 'bootstrap'

	const modal = ref<HTMLElement | null>(null)
	let bsModal: Modal | null = null

	onMounted(() => {
		if (modal.value) {
			bsModal = new Modal(modal.value)
		}
	})

	function open() {
		bsModal?.show()
	}

	function close() {
		(document.activeElement as HTMLElement)?.blur()
		bsModal?.hide()
		modal.value?.setAttribute('aria-hidden', 'true')
	}


	defineExpose({ open, close })
</script>

<template>
  <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content bg-modal-privacy">
        <div class="modal-header">
          <h1 class="modal-title fs-2" id="exampleModalLabel">Política de Privacidad</h1>
          <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
        </div>
        <div class="modal-body fs-5">
					<p>
						<span class="fw-privacy">TERRO, S.A. de C.V.</span>, con domicilio en <span class="fw-privacy">Blvd. J. J. Torres Landa Ote. 5642, Cerrito de
						Jerez, CP 37530, León, Guanajuato, México</span>, como responsable de la operación de la
						empresa, incluyendo, pero no limitando, los documentos en papel y electrónicos, al
						recabar tus datos personales, del uso que se les dé a los mismos, su protección y demás
						información necesaria para la regulación de las relaciones comerciales con nuestros
						clientes, te informa lo siguiente:
					</p>
					<p>
						Tu información personal será utilizada para realizar todas las actividades relacionadas con
						nuestra operación, compra de productos y/o servicios, incluyendo la aceptación de los
						documentos en papel y electrónicos, para recabar la información necesaria y llevar a cabo
						el proceso de trabajo. Además, se tomará en cuenta la Ley Federal de Protección de
						Datos Personales en Posesión de los Particulares, para garantizar que tu información se
						maneje con la debida protección.
					</p>
					<p>
						Tienes derecho a acceder, rectificar y cancelar tus datos personales, así como a oponerte
						al tratamiento de los mismos o revocar el consentimiento que nos hayas otorgado. Para
						ello, podrás ejercer cualquiera de los derechos ARCO (Acceso, Rectificación, Cancelación
						u Oposición) comunicándote con nosotros a través de los procedimientos establecidos.
					</p>
					<p>
						Cualquier modificación a este aviso de privacidad podrá ser consultada en nuestra página
						web o en los estrados de anuncios en nuestras instalaciones.
					</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="close">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
	.bg-modal-privacy{
		background-color: #9d9167;
		color: #fff8ea;
	}
	.modal-title {
		font-family: 'Playfair Display', serif;
	}
	.fw-privacy{
		color: #454015; 
		font-weight: 600;
	}
	.btn-secondary {
		background-color: #454015;
		color: #fff8ea;
		border-color: #454015;
	}
	.btn-secondary:hover {
		background-color: #fff8ea;
		color: #454015; 
		border-color: #fff8ea;
	}
</style>

