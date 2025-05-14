<script lang="ts" setup>
	import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
</script>

<template>
	<HeaderComponent />
	<section class="bg-terms pb-4">
		<div class="container mx-auto w-75">
			<div class="row">
				<div class="col">
					<h1 class="conditions-title display-1 mt-3 mb-3 text-center">Política de Privacidad</h1>
					<div class="pt-2">
						<p class="fs-3 mt-3 mb-4 text-conditions">
							<span class="fw-privacy">TERRO, S.A. de C.V.</span>, con domicilio en <span class="fw-privacy">Blvd. J. J. Torres Landa Ote. 5642, Cerrito de
							Jerez, CP 37530, León, Guanajuato, México</span>, como responsable de la operación de la
							empresa, incluyendo, pero no limitando, los documentos en papel y electrónicos, al
							recabar tus datos personales, del uso que se les dé a los mismos, su protección y demás
							información necesaria para la regulación de las relaciones comerciales con nuestros
							clientes, te informa lo siguiente:
						</p>
						<p class="fs-3 mt-3 mb-4 text-conditions">
							Tu información personal será utilizada para realizar todas las actividades relacionadas con
							nuestra operación, compra de productos y/o servicios, incluyendo la aceptación de los
							documentos en papel y electrónicos, para recabar la información necesaria y llevar a cabo
							el proceso de trabajo. Además, se tomará en cuenta la Ley Federal de Protección de
							Datos Personales en Posesión de los Particulares, para garantizar que tu información se
							maneje con la debida protección.
						</p>
						<p class="fs-3 mt-3 mb-4 text-conditions">
							Tienes derecho a acceder, rectificar y cancelar tus datos personales, así como a oponerte
							al tratamiento de los mismos o revocar el consentimiento que nos hayas otorgado. Para
							ello, podrás ejercer cualquiera de los derechos ARCO (Acceso, Rectificación, Cancelación
							u Oposición) comunicándote con nosotros a través de los procedimientos establecidos.
						</p>
						<p class="fs-3 mt-3 mb-4 text-conditions">
							Cualquier modificación a este aviso de privacidad podrá ser consultada en nuestra página
							web o en los estrados de anuncios en nuestras instalaciones.
						</p>
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
	.fw-privacy{
		color: #454015; 
		font-weight: 600;
	}
	.text-conditions {
    text-align: justify;
		color: #454015 !important;
	}
	.conditions-title,
	.conditions-subtitle {
		color: #454015 !important;
		font-family: 'Cormorant', serif;
	}
	.list-style {
    	list-style-type:decimal
	}
</style>