<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue'

import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>
