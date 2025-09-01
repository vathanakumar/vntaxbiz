<script setup>
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">Accounting</div>
      <div class="navbar-links">
        <router-link to="/">Home</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/book">Book Appointment</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;       /* Fix at top */
  top: 0;
  left: 0;
  width: 100%;           /* Full width */
  background-color: #2563eb;
  color: white;
  padding: 1rem 0;
  z-index: 50;           /* Ensure it stays above content */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;      /* Small horizontal padding */
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.25rem;
}

.navbar-links a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
}

.navbar-links a:hover {
  text-decoration: underline;
}

/* Add top padding to body or main content so it’s not hidden behind navbar */
body, main, .site-wrapper {
  padding-top: 64px; /* Adjust to match navbar height */
}
</style>
