<script setup>
</script>

<template>
  <div class="w-screen min-h-screen flex flex-col bg-gray-50">
    <!-- Hero Section -->
    <section class="w-screen h-screen flex flex-col justify-center items-center text-center bg-blue-100 px-6 sm:px-12">
      <h1 class="text-5xl sm:text-6xl font-bold text-blue-700 mb-8">
        Professional Accounting Services
      </h1>
      <p class="text-gray-700 text-lg sm:text-xl max-w-3xl mb-10 leading-relaxed">
        Manage your appointments, track finances, and get expert advice — all in one place.
      </p>
      <button class="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
        Book an Appointment
      </button>
    </section>


    <!-- Services Section -->
    <section class="w-screen py-16 bg-gray-100 flex flex-col items-center text-center">
      <h2 class="text-3xl font-bold text-blue-700 mb-6">Our Services</h2>
      <p class="text-gray-600 mb-12 max-w-2xl">
        We provide a wide range of accounting and consulting services.
      </p>

      <div class="w-full max-w-5xl grid gap-8 sm:grid-cols-3 px-4">
        <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 class="font-semibold text-xl mb-2 text-blue-600">Bookkeeping</h3>
          <p class="text-gray-600">Keep your financial records accurate and up-to-date effortlessly.</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 class="font-semibold text-xl mb-2 text-blue-600">Tax Preparation</h3>
          <p class="text-gray-600">We handle all taxes professionally, ensuring compliance and savings.</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 class="font-semibold text-xl mb-2 text-blue-600">Financial Consulting</h3>
          <p class="text-gray-600">Expert guidance to help your business grow and stay profitable.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="w-screen bg-blue-600 text-white py-6 mt-auto flex justify-center items-center">
      <div class="text-center text-sm">
        &copy; 2025 Accounting Services. All rights reserved.
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* No extra styles needed */
</style>
