<script setup>
	import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
</script>

<template>
	<HeaderComponent />
	<section class="container-fluid p-0">
		<div class="row g-0">
			<div class="col-12 col-xl-4 bg-history p-4 d-flex flex-column justify-content-center">
				<div class="ps-md-5 pe-md-4">
					<div class="border-top border-2 w-75 mb-3"></div>
					<h1 class="title-history mb-3 fw-bold display-4 text-uppercase">Nuestra<br>Historia</h1>
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
			<div class="col-12 col-xl-8 image-section d-flex flex-column">
			<h3 class="quote display-6">
				Porque no solo vendemos acabados:<br>
				te ayudamos a construir el espacio con el<br>
				que siempre has soñado.
			</h3>
			<img src="/img/img-history.avif" alt="Nuestra Historia" class="img-fluid mt-auto">
			</div>
		</div>
	</section>
	<section class="container-fluid bg-mission">
		<div class="p-5 text-center container">
			<h2 class="title-mission mb-4 display-4 fw-bold">Nuestra Mision</h2>
			<p class="mx-auto fs-4 text-muted mb-5">
				En Terro, transformamos materiales en sueños. Proveemos acabados arquitectónicos de alta calidad que
				dan vida a espacios únicos, fusionando tradición y diseño. Más que productos, ofrecemos la posibilidad de
				crear hogares y proyectos con identidad, belleza y durabilidad.
			</p>
			<div class="d-inline-flex gap-2 mb-5">
				<div class="row w-50 mx-auto d-none d-xl-flex">
					<div class="col-6 border-end">
						<img src="/img/logo-terro-old.png" alt="logo-old" class="img-fluid">
					</div>
					<div class="col-6 pt-3">
						<img src="/img/logo-terro.avif" alt="logo-old" class="img-fluid">
					</div>
				</div>
				<div class="d-flex d-xl-none row row-cols-1 row-cols-sm-2 w-100 w-sm-75 w-md-50 mx-auto">
					<div class="col border-end border-md-end-0 border-lg-end">
						<img src="/img/logo-terro-old.png" alt="logo-old" class="img-fluid w-100">
					</div>
					<div class="col pt-3 pt-sm-0">
						<img src="/img/logo-terro.avif" alt="logo-new" class="img-fluid w-100">
					</div>
  				</div>
			</div>
		</div>
  	</section>
	<section class="container-fluid">
		<div class="row">
			<div class="col-12 col-md-4">
				<img src="/img/img-col-1.avif" alt="" class="img-fluid w-100">
			</div>
			<div class="col-12 col-md-6">
				<img src="/img/img-col-2.avif" alt="" class="img-fluid w-100">
			</div>
			<div class="col-12 col-md-2">
				<img src="/img/img-col-3.avif" alt="" class="img-fluid w-100">
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
      background-color: #fff8ea;
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
      color: #454015;
      padding: 1.5rem;
      text-align: center;
    }
    @media (max-width: 768px) {
      .title-nuestra {
        font-size: 1.5rem;
      }
    }
	.bg-mission{
		background-color: #fff8ea;
		color: #454015;
	}
	.title-mission{
		font-family: 'Playfair Display', serif;
	}
</style>