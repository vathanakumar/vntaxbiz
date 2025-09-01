<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const date = ref('')
const time = ref('')
const notes = ref('')
const successMessage = ref('')
const submitted = ref(false)

const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfY2-B776w9XlTYQ8wemMyp3-VJ0mlHle4xM4UHxF_ZhgPmbA/formResponse'

const submitForm = async () => {
  const formData = new FormData()
  formData.append('entry.250014723', name.value)
  formData.append('entry.1589922329', email.value)
  formData.append('entry.1790083795', phone.value)
  formData.append('entry.763682401', date.value)
  formData.append('entry.1100458216', time.value)
  formData.append('entry.219261930', notes.value)

  try {
    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })

    submitted.value = true
    successMessage.value = 'Thank you! Your appointment has been submitted.'

    // Optional: auto-hide after 5 seconds
    setTimeout(() => {
      submitted.value = false
      successMessage.value = ''
    }, 5000)

    // Reset fields
    name.value = ''
    email.value = ''
    phone.value = ''
    date.value = ''
    time.value = ''
    notes.value = ''
  } catch (error) {
    console.error('Form submission error:', error)
  }
}
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4 relative">
    <h2 class="text-2xl font-bold text-center">Book an Appointment</h2>

    <form v-if="!submitted" @submit.prevent="submitForm" class="space-y-4">
      <input v-model="name" type="text" placeholder="Full Name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      <input v-model="email" type="email" placeholder="Email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      <input v-model="phone" type="tel" placeholder="Phone Number" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      <input v-model="date" type="date" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      <input v-model="time" type="time" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      <textarea v-model="notes" placeholder="Additional Notes" rows="3" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>

      <button type="submit" class="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
        Submit
      </button>
    </form>

    <transition name="fade">
      <p v-if="submitted" class="text-green-600 font-semibold text-center text-lg animate-bounce">
        {{ successMessage }}
      </p>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
