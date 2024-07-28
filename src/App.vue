<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="app-container">
    <Navbar />
    <div class="content-container">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-container {
  flex: 1;
  margin-top: 70px;
}

nav {
  margin-bottom: 20px; 
}

footer {
  margin-top: 20px; 
}
</style>
