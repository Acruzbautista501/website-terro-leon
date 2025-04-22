<script setup>
    import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
    import ContactComponent from '../components/ContactComponent.vue';

</script>

<template>
	<HeaderComponent />
    <section class="container-fluid">
        <div class="p-5 text-center container">
            <h1 class="title-mission mb-4 display-4 fw-bold text-uppercase">Recursos</h1>
			<p class="mx-auto fs-4 mb-5">
                Queremos estar contigo en cada paso del camino, por lo que te dejamos estas guías que pueden ayudarte.
			</p>
        </div>
    </section>
    <section class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="p-3 text-center container">
                    <h2 class="title-vission mb-4 display-4 fw-bold text-uppercase">Manual de instalación</h2>
                    <p class="mx-auto fs-4 mb-5">
                        ​Conoce paso a paso cómo colocar tu teja. Descarga aquí el manual de instalación y colócala como todo un profesional.
                    </p>
                    <p class="mx-auto fs-4 text-uppercase">
                        Descarga Aquí
                    </p>
		        </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="p-3 text-center">
                    <img src="/img/img-didatic.avif" alt="img-didactic" class="mx-auto img-fluid">
                </div>
            </div>
        </div>
    </section>
    <section class="container-fluid">
        <div class="p-3 container text-center">
            <h2 class="title-vission mb-4 display-4 fw-bold text-uppercase">Videos de instalación</h2>
            <p class="mx-auto fs-4 mb-5">
                ​Conoce paso a paso cómo colocar tu teja. Descarga aquí el manual de instalación y colócala como todo un profesional.
            </p>
            <div class="row g-0 row-gap-0 row-gap-md-4">
                <div class="col-12 col-md-6 pb-3">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/Gul-ITAYQw8?si=ir3r15kUpE_QIGl1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                    ></iframe>
                    <p class="ms-5 me-5 mt-4 fs-4 text-center">
                        ¿Cómo instalar teja plana en losa de concreto?
                    </p>
                </div>
                <div class="col-12 col-md-6 pb-3">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/b0KcX_IE0x0?si=a78fSTrrbvdx_L8D" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                    ></iframe>
                    <p class="ms-5 me-5 mt-4 fs-4 text-center">
                        ​¿Cómo instalar Teja Renacimiento en losa de concreto?
                    </p>
                </div>
                <div class="col-12 col-md-6 pb-3">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/3ujNLFrqSoo?si=P4EuztZ9-pDPIkwo" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                    ></iframe>
                    <p class="ms-5 me-5 mt-4 fs-4 text-center">
                        ¿Cómo instalar teja renacimiento sobre estructura?
                    </p>
                </div>
                <div class="col-12 col-md-6 pb-3">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/6drBfE4uqXA?si=o6XlmKNapMri9j-L" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                    ></iframe>
                    <p class="ms-5 me-5 mt-4 fs-4 text-center">
                        ​¿Cómo instalar teja casa grande sobre estructura de lámina?
                    </p>
                </div>
            </div>
        </div>
    </section>
	<FooterComponent />
</template>

<style scoped>
</style>