<script lang="ts" setup>
 	import { ref } from 'vue';
	import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
	import PrivacyNoticeComponent from '../components/PrivacyNoticeComponent.vue';

	const modalPrivacy =  ref<InstanceType<typeof PrivacyNoticeComponent> | null>(null)
  
  function openModal() {
    modalPrivacy.value?.open()
  }


</script>

<template>
	<HeaderComponent />
	<section class="bg-terms pb-4">
		<div class="container mx-auto w-75">
			<div class="row">
				<div class="col">
					<h1 class="conditions-title display-1 mt-3 mb-5 text-center">Términos y Condiciones</h1>
					<div class="pt-2">
						<h2 class="display-5 text-center text-lg-start conditions-subtitle mb-4">Condiciones Generales</h2>
						<ul class="fs-3">
							<li>
								Las cotizaciones presentadas no incluyen costos por maniobra de descarga. Estos se 
								agregarán según corresponda en cada caso y serán informados al momento de la cotización.
							</li>
							<li>
								Las condiciones pueden variar dependiendo de la región y no son acumulables con otros 
								descuentos o promociones. TERRO se reserva el derecho de modificar estas condiciones 
								sin previo aviso.
							</li>	
                        </ul>
						<p class="fs-3 mt-3 mb-4 text-conditions">
							Al realizar una compra con nosotros, el cliente acepta todos y cada uno de
							los términos y condiciones aquí establecidos. Lo que no ha sido expresamente señalado
							en los presentes términos y condiciones, incluyendo tiempos de entrega, políticas de
							cambio o devolución de productos, método de pago, entre otros, se regirá plenamente por
							los términos y condiciones generales publicados en nuestra página web:
							<router-link to="/terminos-y-condiciones" class="text-decoration-none">https://terro.com.mx/terminos-y-condiciones.</router-link>
						</p>
						<div class="accordion accordion-flush" id="accordionFlushExample">
							<div class="accordion-item">
								<div class="accordion-header">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
										<h4 class="mt-4 fs-3 text-center text-lg-start fw-bold">Condiciones de Entrega</h4>
									</button>
								</div>
								<div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										<ul class="fs-4 list-style text-conditions">
											<li>
												<span class="fw-bold">En tienda o centro de distribución</span> <br>
												<ul class="fs-4 text-conditions mb-3">
													<li>Tras realizar la compra, el cliente podrá recoger sus productos directamente en nuestras instalaciones.</li>
													<li>Es necesario presentar una identificación oficial vigente para poder recoger los materiales. No se entregarán productos sin identificación.</li>
													<li>Si no es posible que el cliente recoja los materiales en persona, podrá autorizar a otra persona para hacerlo, siempre que esta persona también presente una identificación oficial vigente.</li>
													<li>Los materiales deben ser revisados al momento de la entrega para verificar que no presenten daños. En caso de que se detecte alguna anomalía, el cliente tiene un plazo de 72 horas para reportarlo.</li>
													<li>No se aceptan cambios ni devoluciones de ningún producto. Esto incluye materiales como adhesivos, boquillas, productos de instalación, líneas descontinuadas, promociones o pedidos especiales.</li>
													<li>El cliente es responsable de revisar el modelo, color y formato del pedido al momento de la entrega.</li>
												</ul>
											</li>
											<li>
												<span class="fw-bold">En tienda o centro de distribución</span> <br>
												<ul class="fs-4 text-conditions mb-3">
													<li>La entrega se realizará exclusivamente a pie de camión, en el lugar más accesible del domicilio.</li>
													<li>La entrega se realizará entre las 8:30 AM y las 6:30 PM de lunes a viernes, y entre las 8:00 AM y las 2:00 PM los sábados.</li>
													<li>En caso de no haber nadie en el domicilio para recibir los materiales, se dejará un aviso de visita y se procederá a agendar una re-entrega, la cual generará un cargo adicional por el doble de flete.</li>
													<li>En obras de construcción, la entrega se realizará exclusivamente a pie de camión por razones de seguridad y acceso.</li>
													<li>Si las maniobras de entrega requieren un esfuerzo adicional (por ejemplo, en pisos altos o sitios de difícil acceso), se aplicarán cargos adicionales, según la tarifa vigente en el momento de la compra.</li>
												</ul>
											</li>	
										</ul>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<div class="accordion-header">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
										<h4 class="mt-4 fs-3 text-center text-lg-start fw-bold">Derecho de Rechazo de Venta</h4>
									</button>
								</div>
								<div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										<ul class="fs-4 text-conditions">
											<li>
												<p class="fs-4 text-conditions">
													TERRO se reserva el derecho de aceptar o rechazar cualquier venta, en cualquier momento y por cualquier motivo, incluyendo, pero no limitándose a, la falta de
													disponibilidad de inventario, información errónea en el proceso de compra o incumplimiento de los términos y condiciones establecidos. En caso de que se rechace
													una venta, se notificará al cliente y se procederá con la cancelación del pedido y la devolución del monto abonado, en caso de que haya sido efectuado un pago previo.
												</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<div class="accordion-header">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
										<h4 class="mt-4 fs-3 text-center text-lg-start fw-bold">Aviso de Privacidad</h4>
									</button>
								</div>
								<div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										<p class="fs-4 text-conditions">
											TERRO se compromete a proteger la privacidad de los datos personales del cliente. La información proporcionada será tratada con estricta confidencialidad y no será divulgada 
											a terceros, excepto cuando sea requerido por la ley o con el consentimiento expreso del cliente.
										</p>
										<p class='fs-4 text-conditions'>
											Para más detalle, consulte nuestro
											<a href="#" class="text-decoration-none" @click.prevent="openModal">Aviso de Privacidad</a>.
										</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<div class="accordion-header">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
										<h4 class="mt-4 fs-3 text-center text-lg-start fw-bold">Modificaciones de Términos y Condiciones</h4>
									</button>
								</div>
								<div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										<p className='fs-4 text-conditions'>
											TERRO se reserva el derecho de modificar, actualizar o cambiar estos términos y condiciones en cualquier momento. Se notificará a los clientes sobre cualquier cambio 
											relevante a través de un aviso visible en la página web o mediante correo electrónico. El uso continuado de los servicios de TERRO después de cualquier cambio en los 
											términos y condiciones constituirá la aceptación de dichas modificaciones.
										</p>
									</div>
								</div>
							</div>
							<PrivacyNoticeComponent ref="modalPrivacy" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<FooterComponent />
</template>

<style scoped>
	.bg-terms,
	.accordion-button,
    .accordion-body {
		background-color: #fff8ea !important;
		color: #454015 !important;
	}
	.text-conditions {
    text-align: justify;
		color: #454015 !important;
	}
	.conditions-title,
	.conditions-subtitle {
		color: #454015 !important;
		font-family: 'Playfair Display', serif;
	}
	.list-style {
    	list-style-type:decimal
	}
</style>