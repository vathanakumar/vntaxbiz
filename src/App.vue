<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Fixed Navbar -->
    <Navbar />

    <!-- Main content -->
    <main class="flex-1 pt-20">
      <div class="w-full max-w-7xl px-4 mx-auto flex flex-col items-center text-center">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Optional: ensure main content fills space */
main {
  width: 100%;
}
</style>
