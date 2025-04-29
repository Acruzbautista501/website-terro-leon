<script lang="ts" setup>
    import FooterComponent from '../components/FooterComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
    import ContactComponent from '../components/ContactComponent.vue';

</script>

<template>
	<HeaderComponent />
    <main class="main-contact">
        <ContactComponent/>
    </main>
	<FooterComponent />
</template>

<style scoped>
.main-contact {
  background-color: #fff8ea !important;
}

</style>