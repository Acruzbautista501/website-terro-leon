<script lang="ts" setup>
  import { ref } from 'vue';
  import PrivacyNoticeComponent from './PrivacyNoticeComponent.vue'
  import DeliveryPoliciesComponent from './DeliveryPoliciesComponent.vue';

  const modalPrivacy =  ref<InstanceType<typeof PrivacyNoticeComponent> | null>(null)
  
  function openModal() {
    modalPrivacy.value?.open()
  }

  const modalDelivery =  ref<InstanceType<typeof DeliveryPoliciesComponent> | null>(null)
  
  function openModalDelivery() {
    modalDelivery.value?.open()
  }

</script>

<template>
<footer class="bg-footer py-4">
  <div class="container">
    <div class="row text-center text-md-start">
      <!-- Columna de contacto -->
      <div class="col-md-4 mb-4 mb-md-0 border-end">
        <ul class="list-unstyled fs-5 mt-5">
          <li><a href="#" class="text-decoration-none color-footer">477 628 7515</a></li>
          <li class="mt-3 mb-3"><a href="mailto:contacto@terroacabados.com" class="text-decoration-none color-footer">contacto@terroacabados.com</a></li>
          <li>
            <a href="#" class="text-decoration-none color-footer">
              Blvd. J. J. Torres Landa Ote. 5642,
              Cerrito de Jerez, 37530 León de los
              Aldama, Gto.
            </a>
          </li>
        </ul>
      </div>

      <!-- Columna de políticas -->
      <div class="col-md-4 mb-4 mb-md-0 border-end">
        <ul class="list-unstyled ms-lg-3 fs-5 mt-3">
          <li class="mb-3"><a href="#" class="text-decoration-none color-footer">FAQ´s</a></li>
          <li class="mb-3"><a href="#" class="text-decoration-none text-uppercase color-footer" @click.prevent="openModal">Polítca de Privacidad</a></li>
          <li class="mb-3"><a href="#" class="text-decoration-none text-uppercase color-footer" @click.prevent="openModalDelivery">Políticas de Entrega y Devoluciones</a></li>
          <li class="mb-3"><a href="#" class="text-decoration-none text-uppercase color-footer">Términos y condiciones</a></li>
        </ul>
        <PrivacyNoticeComponent ref="modalPrivacy" />
        <DeliveryPoliciesComponent ref="modalDelivery"/>
      </div>

      <!-- Columna de redes sociales -->
      <div class="col-md-4 d-flex flex-column align-items-center justify-content-center">
        <div class="d-flex gap-3">
          <a href="#" class="text-dark fs-4"><i class="icon-footer bi bi-facebook fs-1 ms-3"></i></a>
          <a href="#" class="text-dark fs-4"><i class="icon-footer bi bi-instagram fs-1 mx-3"></i></a>
          <a href="#" class="text-dark fs-4"><i class="icon-footer bi bi-pinterest fs-1 me-3"></i></a>
          <a href="#" class="text-dark fs-4"><i class="icon-footer bi bi-youtube fs-1 me-3"></i></a>
        </div>
      </div>
    </div>

    <!-- Pie de página -->
    <div class="text-center mt-4 fs-6 color-footer">
      ©2025 por Tejas y barro de León.
    </div>
  </div>
</footer>
</template>

<style scoped>
  .bg-footer {
    background-color: #fff8ea !important;
  }
  .border-end {
    border-right: 1px solid #454015 !important;
  }
  .color-footer,
  .icon-footer{
    color: #454015 !important;
  }
  </style>