<script setup>
    import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
    import ContactComponent from '../components/ContactComponent.vue';

</script>

<template>
	<HeaderComponent />
    <section class="container-fluid bg-title-didactic">
        <div class="p-5 text-center container">
            <h1 class="title-mission mb-4 display-3 text-uppercase">Recursos</h1>
			<p class="mx-auto fs-4 mb-5">
                Queremos estar contigo en cada paso del camino, por lo que te dejamos estas guías que pueden ayudarte.
			</p>
        </div>
    </section>
    <section class="container-fluid bg-didactic-manual">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="p-5 text-center container">
                    <h2 class="title-vission mb-4 display-5 text-uppercase">Manual de instalación</h2>
                    <p class="mx-auto fs-5 mb-5">
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
    <section class="container-fluid py-5 bg-didactic-video">
        <div class="container text-center">
            <h2 class="display-5 text-uppercase mb-4 title-vission">Videos de instalación</h2>
            <p class="fs-5 mx-auto mb-5 px-3 px-md-5">
                Conoce paso a paso cómo colocar tu teja. Descarga aquí el manual de instalación y colócala como todo un profesional.
            </p>
        </div>
    </section>
    <section class="container-fluid py-5 bg-didactic-videos">
        <div class="container text-center">
            <div class="row gy-5">
                <div class="col-12 col-md-6">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/Gul-ITAYQw8?si=ir3r15kUpE_QIGl1" 
                            title="¿Cómo instalar teja plana en losa de concreto?" 
                            allowfullscreen 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin">
                        </iframe>
                    </div>
                    <p class="video-description text-center">¿Cómo instalar teja plana en losa de concreto?</p>
                </div>
                <div class="col-12 col-md-6">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/b0KcX_IE0x0?si=a78fSTrrbvdx_L8D" 
                            title="¿Cómo instalar Teja Renacimiento en losa de concreto?" 
                            allowfullscreen 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin">
                        </iframe>
                    </div>
                    <p class="video-description text-center">¿Cómo instalar Teja Renacimiento en losa de concreto?</p>
                </div>
                <div class="col-12 col-md-6">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/3ujNLFrqSoo?si=P4EuztZ9-pDPIkwo" 
                            title="¿Cómo instalar teja renacimiento sobre estructura?" 
                            allowfullscreen 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin">
                        </iframe>
                    </div>
                    <p class="video-description text-center">¿Cómo instalar teja renacimiento sobre estructura?</p>
                </div>
                <div class="col-12 col-md-6">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/6drBfE4uqXA?si=o6XlmKNapMri9j-L" 
                            title="¿Cómo instalar teja casa grande sobre estructura de lámina?" 
                            allowfullscreen 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin">
                        </iframe>
                    </div>
                    <p class="video-description text-center">¿Cómo instalar teja casa grande sobre estructura de lámina?</p>
                </div>
            </div>
        </div>
    </section>
	<FooterComponent />
</template>

<style scoped>
    .bg-title-didactic,
    .bg-didactic-video {
        color: #fff8ea; 
        background-color: #9d9167;
    }
    .bg-didactic-manual,
    .bg-didactic-videos {
        color: #454015;
        background-color: #fff8ea;
    }
    .video-container {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%; /* Proporción 16:9 */
        height: 0;
        overflow: hidden;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    }

    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }

    .video-description {
        font-size: 1.2rem;
        margin-top: 1rem;
    }

    @media (max-width: 576px) {
        .video-description {
            font-size: 1rem;
            padding: 0 1rem;
        }
    }
</style>