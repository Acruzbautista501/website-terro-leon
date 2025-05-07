<script setup>
	import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
</script>

<template>
	<HeaderComponent />
	<section class="container-fluid p-0">
		<div class="row g-0">
			<div class="col-12 col-xl-4 bg-history d-flex flex-column justify-content-center">
				<div class="ps-3 pe-4 ps-xxl-5 pe-xxl-5">
					<div class="border-top border-2 w-75 mb-3 d-none d-xl-block"></div>
					<h1 class="title-history mt-3 mt-xl-0 mb-3 display-4 text-uppercase">Nuestra<br>Historia</h1>
					<p class="text-history fs-3 mb-3 d-block d-xl-none d-xxl-block">
						Todo empezó en León, Guanajuato, con un sueño familiar: transformar la construcción en algo más que obra gris.
						Queríamos ofrecer materiales que no solo fueran funcionales, sino también bellos, naturales y llenos de significado. 
						Así nació Tejas y Barro de León, y con el tiempo, crecimos, aprendimos, nos llenamos de ideas nuevas. 
					</p>
					<p class="text-history fs-3 mb-3 d-block d-xl-none d-xxl-block">
						Hoy somos TERRO, y seguimos aquí, acompañando cada proyecto con calidad, diseño y calidez.
					</p>
					<p class="text-history fs-3 mb-3 d-none d-xl-block d-xxl-none">
						Todo empezó en León, Guanajuato, con un sueño familiar: transformar la construcción en algo más que obra gris.
						Queríamos ofrecer materiales que no solo fueran funcionales, sino también bellos, naturales y llenos de significado. 
						Así nació Tejas y Barro de León, y con el tiempo, crecimos, aprendimos, nos llenamos de ideas nuevas. 
					</p>
					<p class="text-history fs-3 mb-3 d-none d-xl-block d-xxl-none">
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
		<div class="p-5 text-center container w-75">
			<h2 class="title-mission mb-4 display-4 text-uppercase">Nuestra Misión</h2>
			<p class="mx-auto fs-3 mb-5">
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
	<section class="container-fluid px-0 bg-vission">
		<div class="row g-0 d-flex image-row flex-nowrap">
			<div class="col-12 col-xl-3 img-column">
				<img src="/img/img-col-1.avif" alt="" class="w-100">
			</div>
			<div class="col-12 col-xl-7 img-column">
				<img src="/img/img-col-2.avif" alt="" class="w-100">
			</div>
			<div class="col-12 col-xl-2 img-column">
				<img src="/img/img-col-3.avif" alt="" class="w-100">
			</div>
		</div>
		<div class="p-5 text-start container w-75">
			<h2 class="title-vission mb-4 display-4 text-uppercase">Nuestra Visión</h2>
			<p class="mx-auto fs-3 mb-5">
				Ser la referencia en acabados arquitectónicos que combinan tradición y diseño, ofreciendo productos que
				inspiran y transforman espacios en México y más allá. Nos consolidamos como la solución integral para
				proyectos arquitectónicos, brindando no solo materiales de alta calidad, sino también asesoría personalizada y
				una red de alianzas comerciales que faciliten cada etapa del proceso.
			</p>
			<p class="mx-auto fs-3">
				En TERRO, queremos ser el lugar donde arquitectos, diseñadores y clientes encuentren todo lo necesario para
				dar vida a sus espacios con acabados aplicados en el diseño de interiores y exteriores.
			</p>
			<div class="border-bottom border-2 w-25 mt-5"></div>
		</div>
	</section>
	<section class="container-fluid bg-values">
		<div class="container p-5">
			<div class="row g-5 align-items-center">
				<div class="col-12 col-xl-7">
					<h2 class="title-values mb-4 display-4 text-uppercase">Nuestros Valores</h2>
					<div class="table-responsive">
						<table class="table align-middle">
							<tbody>
								<tr class="border-value">
									<th class="label-value text-uppercase display-5 p-3 bg-col">Calidad</th>
									<td class="desc-value fs-3 p-3 bg-col">Materiales duraderos y <br> de primera.</td>
								</tr>
								<tr class="border-value">
									<th class="label-value text-uppercase display-5 p-3 bg-col">Cercanía</th>
									<td class="desc-value fs-3 p-3 bg-col">Relación genuina con <br> clientes y profesionales</td>
								</tr>
								<tr class="border-value">
									<th class="label-value text-uppercase display-5 p-3 bg-col">Innovación</th>
									<td class="desc-value fs-3 p-3 bg-col">Adaptarse a nuevas <br> tendencias y necesidades.</td>
								</tr>
								<tr class="border-value">
									<th class="label-value text-uppercase display-5 p-3 bg-col">Compromiso</th>
									<td class="desc-value fs-3 p-3 bg-col">Ayudar a los clientes a <br> hacer realidad sus proyectos.</td>
								</tr>
								<tr class="border-value">
									<th class="label-value text-uppercase display-5 p-3 bg-col">Responsabilidad</th>
									<td class="desc-value fs-3 p-3 bg-col">Cumplir con altos estándares <br> y prácticas sostenible</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="col-12 col-xl-5">
					<div class="row g-0 d-flex image-value-row flex-nowrap">
						<div class="img-value-column">
							<img src="/img/img-value.png" alt="img-value" class="w-100">
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<FooterComponent />
</template>

<style scoped>
    .bg-history {
      background-color: #9d9167;
      color: #fff8ea;
    }
    .title-history {
      font-family: 'Cormorant', serif;
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

	@media (min-width: 1601px) {
		.image-section img {
			height: 650px;
		}
		.text-history{
			font-size: 24px;
		}
	}

	@media (min-width: 1200px) and (max-width: 1600px) {
		.image-section img {
			height: 500px;
		}
	}
	@media (max-width: 1199px) {
		.image-section img {
			height: 650px;
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
	.bg-mission,
	.bg-values{
		background-color: #fff8ea !important;
		color: #454015;
	}
	.title-mission,
	.title-values{
		font-family: 'Cormorant', serif;
	}
	.border-end {
    border-right: 2px solid #454015 !important;
  }
	.img-column {
		overflow: hidden;
		padding: 0;
  	}

	.img-column img {
		width: 100%;
		height: 120%;
		object-fit: cover;
		object-position: top;
		display: block;
	}

	.image-row {
		height: 60vh;
	}

  /* En pantallas pequeñas: que la fila tenga altura automática y columnas apiladas */
  @media (max-width: 1200px) {
    .image-row {
      height: auto;
      flex-direction: column !important;
    }

    .img-column {
      height: 45vh; /* altura por imagen apilada en móvil */
    }
  }
	.bg-vission{
		background-color: #9d9167;
		color: #fff8ea;
	}
	.title-vission{
		font-family: 'Cormorant', serif;
	}
    .label-value {
      color: #454015;
	  font-family: 'Cormorant', serif;
    }
    .desc-value {
      color: #454015;
    }
    .border-value {
      border-bottom: 2px solid #454015!important;
    }
	.bg-col{
		background-color: transparent !important;
	}
	.img-value-column {
		overflow: hidden;
		padding: 0;
  	}

	.img-value-column img {
		width: 120% !important;
		height: 120%;
		object-fit: cover;
		object-position: top;
	}

	.image-value-row {
		height: 60vh;
	}

	@media (max-width: 1200px) {
		.image-value-row {
		height: auto;
		flex-direction: column !important;
		}

		.img-value-column {
		height: 75vh; /* altura por imagen apilada en móvil */
		}
  	}
	
	  @media (max-width: 576px) {
		.img-value-column {
      		height: 45vh; /* altura por imagen apilada en móvil */
    	}
	}
</style>