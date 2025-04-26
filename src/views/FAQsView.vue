<script lang="ts" setup>
	import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';

</script>

<template>
	<HeaderComponent />
	<section class="bg-faqs pb-4">
        <div class="container mx-auto">
            <div class="row">
                <div class="col">
                    <h1 class="conditions-title display-3 mt-3 mb-3 text-center text-lg-start">FAQs - Resolvemos tus dudas</h1>
                    <div class="pt-2">
                        <p class="fs-5 mt-3 mb-4 text-conditions">
                            En TERRO, queremos brindarte la mejor experiencia, por eso hemos reunido las
                            preguntas más comunes que nos hacen nuestros clientes. Si no encuentras lo que
                            buscas, ¡estamos a solo un mensaje de distancia!
                        </p>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h4 class="mt-4 fs-4 text-center text-lg-start fw-bold">¿Cómo se compra la teja: por Pieza o por M2?</h4>
                                    </button>
                                </div>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p className='fs-6 text-conditions'>
                                            Para hacer una compra precisa, la teja se vende por metros cuadrados (m²) y no por
                                            piezas. Esto te ayudará a calcular un presupuesto más exacto, y si tienes dudas, nuestro
                                            equipo siempre está disponible para orientarte.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <h4 class="mt-4 fs-4 text-center text-lg-start fw-bold">¿Cómo puedo solicitar una cotización?</h4>
                                    </button>
                                </div>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p className='fs-6 text-conditions'>
                                            ¡Es fácil! Solo escríbenos a través de nuestro formulario de contacto en el sitio web o por
                                            medio de nuestras redes sociales. En cuanto nos contactes, te responderemos con la
                                            cotización detallada.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <h4 class="mt-4 fs-4 text-center text-lg-start fw-bold">¿El flete está incluido en el precio?</h4>
                                    </button>
                                </div>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p className='fs-6 text-conditions'>
                                            El costo del flete no está incluido en el precio de los productos. El monto dependerá de la
                                            ubicación de entrega y el volumen de la compra. Al hacer tu pedido, te proporcionaremos
                                            un presupuesto detallado que incluirá el costo de envío. ¡No dudes en preguntar si tienes
                                            alguna duda sobre este tema!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        <h4 class="mt-4 fs-4 text-center text-lg-start fw-bold">¿Cuánto tiempo tarda en llegar mi pedido?</h4>
                                    </button>
                                </div>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p className='fs-6 text-conditions'>
                                            El tiempo de entrega varía dependiendo del producto y el proveedor, pero no te
                                            preocupes, siempre te informaremos sobre los tiempos exactos. Si tienes alguna duda o
                                            urgencia, ¡con gusto te damos más detalles!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        <h4 class="mt-4 fs-4 text-center text-lg-start fw-bold">¿Puedo facturar mi compra?</h4>
                                    </button>
                                </div>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p className='fs-6 text-conditions'>
                                            ¡Por supuesto! Si necesitas factura, solo contáctanos y con gusto la te la enviamos a tu
                                            correo. Recuerda que debe ser solicitada en el mismo mes de la compra.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                        <h4 class="mt-4 fs-4 text-center text-lg-start fw-bold">¿Pagar con tarjeta me genera algún costo adicional?</h4>
                                    </button>
                                </div>
                                <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p className='fs-6 text-conditions'>
                                            No, hacer tu pago con tarjeta de crédito o débito no tiene ningún cargo adicional. ¡Solo
                                            pagas lo que ves!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                        <h4 class="mt-4 fs-4 text-center text-lg-start fw-bold">¿Qué método de pago aceptan?</h4>
                                    </button>
                                </div>
                                <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <ul class="fs-6 text-conditions">
                                            <span>Te ofrecemos varias opciones para que elijas la más conveniente para ti:</span>
                                            <li>
                                                Tarjetas de crédito y débito Visa y MasterCard.
                                            </li>
                                            <li>
                                                Transferencias a través de SPEI desde cualquier banco.
                                            </li>	
                                            <li>
                                                Efectivo en pesos mexicanos.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
		</div>
        </div>
	</section>
	<FooterComponent />
</template>

<style scoped>
    .bg-faqs {
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