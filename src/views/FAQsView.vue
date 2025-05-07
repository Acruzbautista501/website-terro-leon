<script lang="ts" setup>
	import ContactComponent from '../components/ContactComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';

</script>

<template>
	<HeaderComponent />
	<section class="bg-faqs pb-4">
        <div class="container mx-auto w-75">
            <div class="row">
                <div class="col">
                    <h1 class="conditions-title display-1 mt-3 mb-3 text-center">FAQ´s</h1>
                    <div class="pt-2">
                        <p class="fs-3 mt-3 mb-4 text-center">
                            En TERRO, queremos brindarte la mejor experiencia, por eso hemos reunido las
                            preguntas más comunes que nos hacen nuestros clientes. Si no encuentras lo que
                            buscas, ¡estamos a solo un mensaje de distancia!
                        </p>
                        <div class="divider-botom pt-5 mb-5 w-25 mx-auto"></div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h4 class="mt-4 fs-3 text-center text-lg-start text-uppercase">¿Cómo se compra la teja: por Pieza o por M2?</h4>
                                    </button>
                                </div>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p className='fs-4 text-conditions'>
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
                                        <h4 class="mt-4 fs-3 text-center text-lg-start text-uppercase">¿Cómo puedo solicitar una cotización?</h4>
                                    </button>
                                </div>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p className='fs-4 text-conditions'>
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
                                        <h4 class="mt-4 fs-3 text-center text-lg-start text-uppercase">¿El flete está incluido en el precio?</h4>
                                    </button>
                                </div>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p className='fs-4 text-conditions'>
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
                                        <h4 class="mt-4 fs-3 text-center text-lg-start text-uppercase">¿Cuánto tiempo tarda en llegar mi pedido?</h4>
                                    </button>
                                </div>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p className='fs-4 text-conditions'>
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
                                        <h4 class="mt-4 fs-3 text-center text-lg-start text-uppercase">¿Puedo facturar mi compra?</h4>
                                    </button>
                                </div>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p className='fs-4 text-conditions'>
                                            ¡Por supuesto! Si necesitas factura, solo contáctanos y con gusto la te la enviamos a tu
                                            correo. Recuerda que debe ser solicitada en el mismo mes de la compra.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                        <h4 class="mt-4 fs-3 text-center text-lg-start text-uppercase">¿Pagar con tarjeta me genera algún costo adicional?</h4>
                                    </button>
                                </div>
                                <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p className='fs-4 text-conditions'>
                                            No, hacer tu pago con tarjeta de crédito o débito no tiene ningún cargo adicional. ¡Solo
                                            pagas lo que ves!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                        <h4 class="mt-4 fs-3 text-center text-lg-start text-uppercase">¿Qué método de pago aceptan?</h4>
                                    </button>
                                </div>
                                <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <ul class="fs-4 text-conditions">
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
    <div class="p-3 divider"></div>
    <section class="container-fluid bg-faqs divider-botom">
        <div class="px-4 pt-5 text-center">
          <div class="mb-5">
            <h2 class="display-3 text-uppercase conditions-title">¿Todavía tienes dudas?</h2>
          </div>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-5 fs-3 lh-1">
                ¡No te preocupes! Escríbenos y con gusto te ayudamos a resolver lo que necesites. <br>
                En <img src="/img/logo-terro-brown.png" alt="" class="img-fluid" style="width: 80px;">,
                estamos para apoyarte en cada paso de tu proyecto.
            </p>
          </div>
        </div>
        <ContactComponent />
      </section>
	<FooterComponent />
</template>

<style scoped>
    .bg-faqs,
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
	.conditions-subtitle,
    .accordion-button {
		color: #454015 !important;
		font-family: 'Cormorant', serif;
	}
	.list-style {
        list-style-type:decimal
    }
    .divider {
        background-color: #9d9167 !important;
    }
    .divider-botom {
        border-bottom: 1px solid #454015 !important;;
    }
</style>