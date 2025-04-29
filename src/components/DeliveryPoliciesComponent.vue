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
          <h1 class="modal-title fs-2" id="exampleModalLabel">Políticas de Cancelación y Devoluciones</h1>
          <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
        </div>
        <div class="modal-body fs-5">
            <p>
                En <span class="fw-privacy">TERRO</span> sabemos lo importante que es para ti cada detalle de tu proyecto. Por eso,
                nos aseguramos de ofrecerte solo lo mejor en materiales de construcción, siempre con la
                más alta calidad. Te pedimos que revises con atención tu pedido antes de confirmar la
                compra, y aquí te contamos cómo manejamos las cancelaciones, devoluciones y cambios:
            </p>
            <div class="mx-4">
                <ol>
                    <li>
                        <span class="fw-privacy">Cancelaciones</span>
                        <p>
                            Si necesitas cancelar tu pedido, te pedimos que nos avises dentro de las primeras
                            24 horas después de la compra. Pasado este tiempo, aplicaremos un cargo
                            administrativo del 25% sobre el total del pedido.
                        </p>
                    </li>
                    <li>
                        <span class="fw-privacy">Devoluciones</span>
                        <p>
                            En TERRO, no aceptamos devoluciones de ningún tipo. Todos nuestros productos
                            son hechos bajo demanda, lo que significa que una vez procesada tu compra, no
                            podemos aceptar cambios de opinión. Nos aseguramos de que todo llegue a ti en
                            perfectas condiciones y con la calidad que nos caracteriza.
                        </p>
                    </li>
                    <li>
                        <span class="fw-privacy">Cambios</span>
                        <p>
                            Los cambios de productos están sujetos a disponibilidad y dependerán de si el
                            pedido ha comenzado su proceso de producción. Si la producción ya ha iniciado,
                            lamentablemente no se podrán realizar cambios en tu pedido. Esto nos permite
                            ofrecerte soluciones rápidas y efectivas sin retrasar tu proyecto.
                        </p>
                    </li>
                </ol>
            </div>
            <p>
                Si tienes alguna duda o necesitas más información, no dudes en ponerte en contacto con
                nosotros. En <span class="fw-privacy">TERRO</span>, estamos para apoyarte en cada paso de tu proyecto,
                asegurándonos de que todo lo que construyas sea tan sólido como tus sueños.
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

