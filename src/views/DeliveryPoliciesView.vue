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
					<h1 class="conditions-title display-1 mt-3 mb-3 text-center">Políticas de Cancelación y Devoluciones</h1>
					<div class="pt-2">
						<p class="fs-3 mt-3 mb-4 text-conditions">
							En <span class="fw-privacy">TERRO</span> sabemos lo importante que es para ti cada detalle de tu proyecto. Por eso,
							nos aseguramos de ofrecerte solo lo mejor en materiales de construcción, siempre con la
							más alta calidad. Te pedimos que revises con atención tu pedido antes de confirmar la
							compra, y aquí te contamos cómo manejamos las cancelaciones, devoluciones y cambios:
						</p>
						<div class="mx-lg-5 fs-3">
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
						<p class="fs-3 mt-3 mb-4 text-conditions">
							Si tienes alguna duda o necesitas más información, no dudes en ponerte en contacto con
							nosotros. En <span class="fw-privacy">TERRO</span>, estamos para apoyarte en cada paso de tu proyecto,
							asegurándonos de que todo lo que construyas sea tan sólido como tus sueños.
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