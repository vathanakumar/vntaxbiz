import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Services from '@/components/Services.vue'
import Contact from '@/components/Contact.vue'
import BookAppointment from '@/components/BookAppointment.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/services', name: 'Services', component: Services },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/book', name: 'BookAppointment', component: BookAppointment },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
