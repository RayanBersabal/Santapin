<template>
  <div class="text-[#814C3C] min-h-screen flex flex-col">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>