<script setup>
	import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
</script>

<template>
	<HeaderComponent />
	<section class="container-fluid p-0">
		<div class="row g-0">
			<!-- Columna izquierda -->
			<div class="col-12 col-xl-4 bg-history p-4 d-flex flex-column justify-content-center">
				<div class="ps-md-5 pe-md-4">
					<h1 class="title-history mb-3 fw-bold display-4">NUESTRA<br>HISTORIA</h1>
					<p class="text-history mb-3 fs-4">
						Todo empezó en León, Guanajuato, con un sueño familiar: transformar la construcción en algo más que obra gris.
						Queríamos ofrecer materiales que no solo fueran funcionales, sino también bellos, naturales y llenos de significado. 
						Así nació Tejas y Barro de León, y con el tiempo, crecimos, aprendimos, nos llenamos de ideas nuevas. 
					</p>
					<p class="text-history mb-3 fs-4">
						Hoy somos TERRO, y seguimos aquí, acompañando cada proyecto con calidad, diseño y calidez.
					</p>
				</div>
			</div>

			<!-- Columna derecha -->
			<div class="col-12 col-xl-8 image-section d-flex flex-column">
			<h3 class="quote">
				Porque no solo vendemos acabados:<br>
				te ayudamos a construir el espacio con el<br>
				que siempre has soñado.
			</h3>
			<img src="/img/img-history.avif" alt="Nuestra Historia" class="img-fluid mt-auto">
			</div>
		</div>
	</section>
	<FooterComponent />
</template>

<style scoped>
    .bg-history {
      background-color: #9d9167;
      color: white;
    }
    .title-history {
      font-family: 'Playfair Display', serif;
      line-height: 1.1;
    }
	.text-history{
		text-align: justify;
	}
    .image-section {
      background-color: #f7f0e9;
    }
	.image-section img {
		width: 100%;
		height: auto;
		max-width: 1300px;
		object-fit: cover;
		display: block;
		margin: 0 auto;
	}
	@media (min-width: 1200px) {
		.image-section img {
			height: 700px;
		}
	}
	@media (max-width: 1199px) {
		.image-section img {
			height: auto;
		}
	}
    .quote {
      font-style: italic;
      color: #805c4f;
      padding: 1.5rem;
      text-align: center;
    }
    @media (max-width: 768px) {
      .title-nuestra {
        font-size: 1.5rem;
      }
    }
</style>