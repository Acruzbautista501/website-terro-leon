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
			<h2 class="title-mission mb-4 display-4 fw-bold text-uppercase">Nuestra Misión</h2>
			<p class="mx-auto fs-4 mb-5">
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
		<div class="row g-0">
			<div class="col-12 col-xl-3">
				<img src="/img/img-col-1.avif" alt="" class="w-100 img-fit-top">
			</div>
			<div class="col-12 col-xl-7">
				<img src="/img/img-col-2.avif" alt="" class="w-100 img-fit-top">
			</div>
			<div class="col-12 col-xl-2">
				<img src="/img/img-col-3.avif" alt="" class="w-100 img-fit-top">
			</div>
		</div>
		<div class="p-5 text-start container">
			<h2 class="title-vission mb-4 display-4 fw-bold text-uppercase">Nuestra Visión</h2>
			<p class="mx-auto fs-4 mb-5">
				Ser la referencia en acabados arquitectónicos que combinan tradición y diseño, ofreciendo productos que
				inspiran y transforman espacios en México y más allá. Nos consolidamos como la solución integral para
				proyectos arquitectónicos, brindando no solo materiales de alta calidad, sino también asesoría personalizada y
				una red de alianzas comerciales que faciliten cada etapa del proceso.
			</p>
			<p class="mx-auto fs-4">
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
					<h2 class="title-values mb-4 display-4 fw-bold text-uppercase">Nuestros Valores</h2>
					<div class="table-responsive">
						<table class="table align-middle">
							<tbody>
								<tr class="border-value">
									<th class="label-value text-uppercase display-5 p-3 bg-col">Calidad</th>
									<td class="desc-value fs-5 p-3 bg-col">Materiales duraderos y de primera.</td>
								</tr>
								<tr class="border-value">
									<th class="label-value text-uppercase display-5 p-3 bg-col">Cercanía</th>
									<td class="desc-value fs-5 p-3 bg-col">Relación genuina con clientes y profesionales</td>
								</tr>
								<tr class="border-value">
									<th class="label-value text-uppercase display-5 p-3 bg-col">Innovación</th>
									<td class="desc-value fs-5 p-3 bg-col">Adaptarse a nuevas tendencias y necesidades.</td>
								</tr>
								<tr class="border-value">
									<th class="label-value text-uppercase display-5 p-3 bg-col">Compromiso</th>
									<td class="desc-value fs-5 p-3 bg-col">Ayudar a los clientes a hacer realidad sus proyectos.</td>
								</tr>
								<tr class="border-value">
									<th class="label-value text-uppercase display-6 p-3 bg-col">Responsabilidad</th>
									<td class="desc-value fs-5 p-3 bg-col">Cumplir con altos estándares y prácticas sostenible</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="col-12 col-xl-5">
					<img src="/img/img-value.png" alt="img-value" class="img-wrapper">
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
	.bg-mission,
	.bg-values{
		background-color: #fff8ea !important;
		color: #454015;
	}
	.title-mission,
	.title-values{
		font-family: 'Playfair Display', serif;
	}
	.img-fit-top {
      object-fit: cover;
      object-position: top;
      height: 700px; /* Puedes ajustar esta altura */
    }

	@media (min-width: 768px) and (max-width: 1024px) {
		.img-fit-top {
			height: 450px;
		}
		.item-value-left {
      margin-bottom: 2.58rem !important;
    }
    .item-value {
      margin-bottom: 1.5rem !important;
    }
    }

    @media (max-width: 767.98px) {
      .img-fit-top {
        height: 200px;
      }
    }
	.bg-vission{
		background-color: #9d9167;
		color: #fff8ea;
	}
	.title-vission{
		font-family: 'Playfair Display', serif;
	}
    .label-value {
      color: #454015;
	  font-family: 'Playfair Display', serif;
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
	.img-wrapper {
  width: 100%;
  max-width: 530px;
  height: auto;
  aspect-ratio: 2 / 3; /* Mantiene la proporción aproximada */
  object-fit: cover;
  object-position: top;
}

/* Media query para pantallas pequeñas */
@media (max-width: 768px) {
  .img-wrapper {
    max-width: 100%;
    aspect-ratio: 3 / 4; /* Ajusta la proporción en pantallas más pequeñas */
  }
}
</style>