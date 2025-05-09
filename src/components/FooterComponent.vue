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

  const handleScrollToTop = () => {
  window.scrollTo(0, 0);
};

</script>

<template>
<footer class="bg-footer py-4 pb-5 w-100">
  <div class="container">
    <div class="row text-center text-md-start">
      <!-- Columna de contacto -->
      <div class="col-md-4 mb-4 mb-md-0 border-end">
        <ul class="list-unstyled fs-4 mt-5">
          <li><a href="" class="text-decoration-none color-footer">477 628 7515</a></li>
          <li class="mt-3 mb-3"><a href="" class="text-decoration-none color-footer">contacto@terroacabados.com</a></li>
          <li>
            <p href="#" class="text-decoration-none color-footer">
              Blvd. J. J. Torres Landa Ote. 5642,
              Cerrito de Jerez, 37530 León de los
              Aldama, Gto.
            </p>
          </li>
          <li class="mt-3 mb-3">
            <p class="text-uppercase">Horarios</p>
            <p>Lunes a Viernes <span class="ms-5">9:00 -14:00 y 16:00- 18:00</span></p>
            <p>Sábados <span class="ms-5">9:00 -13:00</span></p>
          </li>
        </ul>
      </div>

      <!-- Columna de políticas -->
      <div class="col-md-4 mb-4 mb-md-0 border-end">
        <ul class="list-unstyled ms-lg-3 fs-4 mt-5 pt-5">
          <li class="mb-3"><router-link to="/faqs" class="text-decoration-none color-footer" @click="handleScrollToTop">FAQ´s</router-link ></li>
          <li class="mb-3"><a href="#" class="text-decoration-none text-uppercase color-footer" @click.prevent="openModal">Polítca de Privacidad</a></li>
          <li class="mb-3"><a href="#" class="text-decoration-none text-uppercase color-footer" @click.prevent="openModalDelivery">Políticas de Entrega y Devoluciones</a></li>
          <li class="mb-3"><router-link to="/terminos-y-condiciones" class="text-decoration-none text-uppercase color-footer" @click="handleScrollToTop">Términos y condiciones</router-link></li>
        </ul>
        <PrivacyNoticeComponent ref="modalPrivacy" />
        <DeliveryPoliciesComponent ref="modalDelivery"/>
      </div>

      <!-- Columna de redes sociales -->
      <div class="col-md-4 d-flex flex-column align-items-center justify-content-center">
        <div class="d-flex gap-3">
          <a href="https://www.facebook.com/TejasyBarrodeLeon" target="_blank" class="text-dark fs-4"><i class="icon-footer bi bi-facebook display-1 ms-5"></i></a>
          <a href="https://www.instagram.com/tejasybarro/" target="_blank" class="text-dark fs-4"><i class="icon-footer bi bi-instagram display-1 mx-5"></i></a>
          <a href="https://wa.link/j9vdxm" target="_blank" class="text-dark fs-4"><i class="icon-footer bi bi-whatsapp display-1 me-5"></i></a>
        </div>
      </div>
    </div>

    <!-- Pie de página -->
    <div class="text-center mt-4 fs-5 color-footer">
      ©2025 por Tejas y barro de León. Todos los derechos reservados. Desarollado por:
      <a href="https://impulsodigitalmkt.com/" target="_blank" class="text-decoration-none link-footer">ImpulsoDigitalMKT</a>
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
  .icon-footer,
  .link-footer{
    color: #454015 !important;
  }
  .link-footer:hover {
    text-decoration: underline !important;
  }
  </style>