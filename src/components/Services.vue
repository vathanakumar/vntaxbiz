<script setup>
</script>

<template>
  <div class="w-screen min-h-screen flex flex-col bg-gray-50">
    <section id="services" class="w-full flex justify-center items-center bg-gray-50 py-16">
      <div class="w-full max-w-7xl">
        <!-- Heading -->
        <div class="w-full flex justify-center items-center bg-gray-50 py-16">
          <h2 class="w-full text-center text-3xl sm:text-4xl font-bold mb-12 text-blue-600 border-4 border-gray-800 p-4">
            Our Services
          </h2>
        </div>




        <!-- Cards Container -->
        <div class="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-32">
          <!-- Card 1 -->
          <div class="bg-white shadow-lg rounded-3xl overflow-hidden transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
            <img src="https://via.placeholder.com/400x300" alt="Bookkeeping" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2 text-blue-600">Bookkeeping</h3>
              <p class="text-gray-600 mb-4">Accurate and up-to-date bookkeeping services for your business.</p>
              <button class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">View</button>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-white shadow-lg rounded-3xl overflow-hidden transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
            <img src="https://via.placeholder.com/400x300" alt="Tax Preparation" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2 text-blue-600">Tax Preparation</h3>
              <p class="text-gray-600 mb-4">We handle tax filing and ensure compliance with local regulations.</p>
              <button class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">View</button>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-white shadow-lg rounded-3xl overflow-hidden transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
            <img src="https://via.placeholder.com/400x300" alt="Financial Consulting" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2 text-blue-600">Financial Consulting</h3>
              <p class="text-gray-600 mb-4">Get expert advice to improve business performance and growth.</p>
              <button class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">View</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
