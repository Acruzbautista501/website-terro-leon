<script setup>
    import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';

</script>

<template>
	<HeaderComponent />
    <main class="main-didactic">
        <section class="container-fluid">
            <div class="p-5 text-center container">
                <div class="text-center py-4">
                    <h1 class="title-mission mb-4 display-1 text-uppercase">Recursos</h1>
                </div>
                <p class="mx-auto fs-3 mb-5">
                    Queremos estar contigo en cada paso del camino, por lo que te dejamos <br> estas guías que pueden ayudarte.
                </p>
            </div>
        </section>
        <section class="container-fluid bg-didactic-manual">
            <div class="row m-0 p-0">
                <div class="col-12 col-md-6 border-top-col m-0">
                    <div class="p-5 text-center container">
                        <h2 class="title-vission mb-4 display-4 text-uppercase">Manual de instalación</h2>
                        <p class="mx-auto fs-3 mb-5">
                            ​Conoce paso a paso cómo colocar tu teja. Descarga aquí el manual de instalación y colócala como todo un profesional.
                        </p>
                        <a href="/zip/manuales de instalacion marcas.zip" download="manuales de instalacion marcas.zip" class="mx-auto fs-3 text-uppercase text-decoration-none text-download">
                            Descarga Aquí
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class=" text-center">
                        <img src="/img/img-didatic.avif" alt="img-didactic" class="img-fluid" style="height: 330px;">
                    </div>
                </div>
            </div>
        </section>
        <section class="container-fluid py-5 bg-didactic-video">
            <div class="container text-center">
                <h2 class="display-4 text-uppercase mb-4 title-vission">Videos de instalación</h2>
                <p class="fs-3 mx-auto mb-5 px-3 px-md-5">
                    Aprende de la mano de los expertos y coloca tu teja como todo un profesional.
                </p>
            </div>
        </section>
        <section class="container-fluid py-5 bg-didactic-videos">
            <div class="container text-center cont">
                <div class="row g-5 gx-5">
                    <div class="col-12 col-md-6">
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/Gul-ITAYQw8?si=ir3r15kUpE_QIGl1" 
                                title="¿Cómo instalar teja plana en losa de concreto?" 
                                allowfullscreen 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin">
                            </iframe>
                        </div>
                        <p class="video-description text-center fs-3">¿Cómo instalar teja plana en losa de concreto?</p>
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
                        <p class="video-description text-center fs-3">¿Cómo instalar Teja Renacimiento en losa de concreto?</p>
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
                        <p class="video-description text-center fs-3">¿Cómo instalar teja renacimiento sobre estructura?</p>
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
                        <p class="video-description text-center fs-3">¿Cómo instalar teja casa grande sobre estructura de lámina?</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
	<FooterComponent />
</template>

<style scoped>
    .main-didactic {
        background-color: #fff8ea !important;
        color: #454015 !important;
    }
    
    .title-mission,
    .title-vission {
        font-family: 'Cormorant', serif;
    }
    .title-mission {
        position: relative;
        display: inline-block;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #3b2415 !important;
    }

    .border-top-col {
        border-top: 1px solid #3b2415 !important;
    }

    .text-download {
        color: #454015 !important;
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
        margin-top: 1rem;
        font-family: 'Cormorant', serif;
    }

    @media (min-width: 1500px) {
        .cont {
            width: 50% !important;
        }
    }
</style>