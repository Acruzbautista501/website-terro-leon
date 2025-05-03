<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { Collapse } from 'bootstrap'

  const navbarCollapseRef = ref<HTMLElement | null>(null)
  let collapseInstance: Collapse | null = null

  onMounted(() => {
    if (navbarCollapseRef.value) {
      collapseInstance = new Collapse(navbarCollapseRef.value, {
        toggle: false 
      })
    }
  })

  function toggleNavbar() {
    collapseInstance?.toggle()
  }
</script>

<template>
  <header class="bg-header">
    <nav class="navbar navbar-expand-lg">
        <div class="container w-75">
            <router-link to="/">
                <img src="/img/logo-terro-brown.png" alt="" class="img-fluid" style="width: 95px;">
            </router-link>
            <button class="navbar-toggler" type="button" @click="toggleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="navbarCollapseRef">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
                    <li class="nav-item pe-0 pe-lg-3">
                        <router-link class="nav-link fs-4" to="/">Inicio</router-link>
                    </li>
                    <li class="nav-item pe-0 pe-lg-3">
                        <router-link class="nav-link fs-4" to="/nosotros">Nosotros</router-link>
                    </li>
                    <li class="nav-item pe-0 pe-lg-2 dropdown">
                        <router-link class="nav-link fs-4" to="/productos">
                            Productos
                        </router-link> 
                        <!--<ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>-->
                    </li>
                    <li class="nav-item pe-0 pe-lg-3">
                        <router-link class="nav-link fs-4" to="/contacto">Contacto</router-link>
                    </li>
                    <li class="nav-item pe-0 pe-lg-3">
                        <router-link class="nav-link fs-4" to="/recursos">Recursos</router-link>
                    </li>
                    <!--<form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>-->
                </ul>
            </div>
        </div>
    </nav>
  </header>
</template>

<style scoped>
	.nav-link {
		color: #454015!important;
		font-size: 18px;
	}
    .bg-header {
        background-color: #fff8ea !important;
    }
</style>
