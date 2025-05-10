<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { Collapse, Offcanvas } from 'bootstrap'
  import { useQuoteStore } from '../stores/quoteStore'
  import { storeToRefs } from 'pinia'
  import Swal from 'sweetalert2'

  const quoteStore = useQuoteStore()
  const { totalItems } = storeToRefs(quoteStore)

  function showOffcanvas() {
    const offcanvas = new Offcanvas(document.getElementById('quoteOffcanvas') as HTMLElement)
    offcanvas.show()
  }

    async function sendQuoteEmail() {
    const { value: email } = await Swal.fire({
        title: 'Enviar cotización',
        input: 'email',
        inputLabel: 'Ingresa tu correo electrónico',
        inputPlaceholder: 'correo@ejemplo.com',
        confirmButtonText: 'Enviar',
        showCancelButton: true,
        inputValidator: (value) => {
        if (!value) {
            return 'Debes ingresar un correo'
        }
        // Validación básica de email opcional
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {
            return 'Correo no válido'
        }
        },
        backdrop: true,
    })

    if (email) {
        quoteStore.sendQuoteByEmail(email)
        Swal.fire('Enviado', 'Tu cotización fue enviada por correo.', 'success')
    }
    }



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
                    </li>
                    <li class="nav-item pe-0 pe-lg-3">
                        <router-link class="nav-link fs-4" to="/contacto">Contacto</router-link>
                    </li>
                    <li class="nav-item pe-0 pe-lg-3">
                        <router-link class="nav-link fs-4" to="/recursos">Recursos</router-link>
                    </li>
                    <li class="nav-item d-flex align-items-center">
                        <button class="nav-link fs-4 position-relative" @click="showOffcanvas">
                            <i class="bi bi-calculator fs-3"></i>
                            <span v-if="totalItems > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 0.7rem;">
                                {{ totalItems }}
                            </span>
                        </button>
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
    <div class="offcanvas offcanvas-end bg-header" tabindex="-1" id="quoteOffcanvas" aria-labelledby="quoteOffcanvasLabel">
    <div class="offcanvas-header">
      <h5 class="fs-1" id="quoteOffcanvasLabel">Cotización</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div v-if="quoteStore.quote.length > 0">
        <div v-for="item in quoteStore.quote" :key="item.id" class="d-flex justify-content-between align-items-center mb-3">
          <div>
            <span class="fs-4 fw-bold">{{ item.name }}</span><br>
            <small class="fs-5 text-capitalize fst-italic">Color: {{ item.color }}</small>
          </div>
          <div>
            <button class="btn btn-outline-secondary" @click="quoteStore.decreaseQuantity(item.id)">-</button>
            <span class="mx-2">{{ item.quantity }}</span>
            <button class="btn btn-outline-secondary" @click="quoteStore.increaseQuantity(item.id)">+</button>
            <button class="btn btn-outline-danger btn-lg mx-4" @click="quoteStore.removeFromQuote(item.id)"><i class="bi bi-trash"></i></button>
          </div>
        </div>
        <div class="mt-5 text-center">
            <button class="btn btn-primary fs-4" @click="sendQuoteEmail">
                <i class="bi bi-envelope-plus me-2"></i> 
                Enviar Cotización
            </button>
        </div>
      </div>
      <div v-else>
        <p class="fs-4 text-center">No hay productos en la cotización.</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .bg-header {
    background-color: #fff8ea !important;
  }
  .nav-link {
    color: #454015 !important;
    font-size: 18px;
  }
    .btn-outline-secondary {
        background-color: transparent !important;
        color: #454015 !important;
        border: 1px solid #9d9167 !important;
    }

    .btn-outline-secondary:hover {
        background-color: #9d9167 !important;
        color: #fff8ea !important;
        border: 1px solid #9d9167 !important;
    }

    .btn-primary {
        background-color: #9d9167 !important;
        color: #fff8ea !important;
        border: 1px solid #9d9167 !important;
    }

    .btn-primary:hover {
        background-color: transparent !important;
        color: #454015 !important;
        border: 1px solid #9d9167 !important;
    }
</style>

