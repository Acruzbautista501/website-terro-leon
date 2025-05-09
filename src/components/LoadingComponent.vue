<template>
    <div v-if="visible" class="loader-overlay">
      <flower-spinner :animation-duration="2500" :size="70" color="#454015" />
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { FlowerSpinner } from 'epic-spinners'
  import { useRoute } from 'vue-router'
  
  const visible = ref(false)
  const route = useRoute()
  
  watch(
    () => route.fullPath,
    () => {
      visible.value = true
      document.body.style.overflow = 'hidden' // Oculta scroll
      setTimeout(() => {
        visible.value = false
        document.body.style.overflow = '' // Restaura scroll
      }, 3000)
    },
    { immediate: true }
  )
  </script>
  
  <style scoped>
  .loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #fff8ea;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  </style>
  