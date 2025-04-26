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
		<div class="container mx-auto">
			<div class="row">
				<div class="col">
					<h1 class="conditions-title display-3 mt-3 mb-3 text-center text-lg-start">Términos y Condiciones</h1>
					<div class="pt-2">
						<h2 class="display-5 text-center text-lg-start conditions-subtitle">Condiciones Generales</h2>
						<p class="fs-5 mt-3 mb-4 text-conditions">
							Las condiciones descritas en este documento son aplicables a todas las compras
							realizadas directamente en nuestro establecimiento o a través de los canales de atención
							personalizada. Al realizar una compra con nosotros, el cliente acepta todos y cada uno de
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
										<h4 class="mt-4 fs-4 text-center text-lg-start fw-bold">Condiciones de Entrega</h4>
									</button>
								</div>
								<div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										<ul class="fs-6 list-style text-conditions">
											<li>
												<p>
													<span class="fw-bold">En Tienda</span> <br>
													Una vez realizada la compra, el cliente recibirá un documento a través de su
													correo electrónico con la fecha y detalles para la recogida de los productos en
													nuestra tienda. El cliente deberá presentar una identificación oficial vigente para
													poder recoger los productos. No se entregarán productos sin esta identificación.
												</p>
												<p>
													Si el cliente no puede recoger los productos en persona, podrá autorizar a una persona de
													confianza, quien también deberá presentar una identificación oficial vigente al momento
													de la recogida.
												</p>
												<p>
													El cliente deberá revisar que los productos se encuentren en buen estado en el momento
													de la entrega. En caso de anomalías, deberá reportarlas dentro de las 72 horas siguientes
													a la entrega. Transcurrido este plazo, no se aceptarán reclamaciones ni cambios.
												</p>
											</li>
											<li>
												<p>
													<span class="fw-bold">En Centro de Distribución</span> <br>
														Después de realizar la compra, el cliente recibirá un documento en su correo
														electrónico con los detalles de la recogida de productos en el Centro de
														Distribución correspondiente.
												</p>
												<p>
													El cliente deberá presentar una identificación oficial vigente al momento de la recogida. En
													caso de que no pueda recoger los productos, podrá autorizar a una persona de confianza
													para hacerlo, quien también deberá presentar su identificación oficial vigente.
												</p>
												<p>
													Los productos deberán ser revisados en el momento de la entrega. En caso de que haya
													alguna anomalía, el cliente deberá informarlo dentro de las 72 horas siguientes a la
													entrega.
												</p>
												<p>
													No se aceptan cambios ni devoluciones de ciertos productos, tales como adhesivos,
													boquillas, productos de instalación, productos de líneas descontinuadas, promociones y
													pedidos especiales.
												</p>
											</li>	
										</ul>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<div class="accordion-header">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
										<h4 class="mt-4 fs-4 text-center text-lg-start fw-bold">Condiciones de Almacenamiento</h4>
									</button>
								</div>
								<div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										<p className='fs-6 text-conditions'>
											En caso de que los productos no sean recogidos dentro de los 72 horas posteriores a la
											fecha acordada, TERRO no será responsable de la condición física de los mismos.
											Además, se generará un cargo adicional por concepto de almacenamiento equivalente al
											10% mensual sobre el importe total de los productos no recogidos.
										</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<div class="accordion-header">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
										<h4 class="mt-4 fs-4 text-center text-lg-start fw-bold">Devoluciones y Cambios</h4>
									</button>
								</div>
								<div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										<p className='fs-6 text-conditions'>
											En caso de que los productos no sean recogidos dentro de los 72 horas posteriores a la
											fecha acordada, TERRO no será responsable de la condición física de los mismos.
											Además, se generará un cargo adicional por concepto de almacenamiento equivalente al
											10% mensual sobre el importe total de los productos no recogidos.
										</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<div class="accordion-header">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
										<h4 class="mt-4 fs-4 text-center text-lg-start fw-bold">Aviso de Privacidad</h4>
									</button>
								</div>
								<div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										<p className='fs-6 text-conditions'>
											La información que proporcione será tratada con estricta confidencialidad y no será
											compartida con terceros sin su autorización, salvo que así lo exijan las autoridades
											competentes. Para más detalles, consulte nuestro
											<a href="#" class="text-decoration-none" @click.prevent="openModal">Aviso de Privacidad</a>.
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
	.bg-terms {
		background-color: #fff8ea !important;
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