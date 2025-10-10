<script setup>
import Logo from '@/assets/LogisLogo.svg'
</script>

<template>
  <header class="topbar">
    <div class="brand">
      <img class="brand-logo" :src="Logo" alt="LogisPe Logo" />
      <span class="app-name">Logis<span class="accent">Pe</span></span>
    </div>
    <nav class="nav">
      <a class="link" href="#">About Us</a>
      <a class="link" href="#">Home</a>
      <a class="link" href="#">Suscribe</a>
      <router-link to="/login" class="link">Log In</router-link>
      <router-link to="/register" class="btn-primary">Register Now</router-link>
    </nav>
  </header>

  <main class="container">
    <router-view />
  </main>
  <footer class="footer">
    <div class="footer-col">
      <router-link to="/login" class="link">Log In</router-link>
      <router-link to="/register" class="btn-primary small">Register Now</router-link>
    </div>
    <div class="footer-col">
      <strong>Contact Us</strong>
      <div>Phone: +51 999 999 999</div>
      <div>Email: servicioalcliente@fintek.com</div>
    </div>
    <div class="footer-col">
      <strong>Legal</strong>
      <div>Terms & Conditions</div>
      <div>Privacy Policy</div>
    </div>
  </footer>
  
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-bottom: 1px solid #eee;
  background: #fff;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand-logo { width: 48px; height: 48px; object-fit: contain; }
.app-name { font-weight: 600; }
.app-name .accent { color: #79d28f; }
.nav { display: flex; gap: 12px; align-items: center; }
.link { color: #333; text-decoration: none; }
.btn-primary {
  padding: 8px 12px;
  border-radius: 6px;
  background: #c62828;
  color: #fff;
  text-decoration: none;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px;
  min-height: calc(100vh - 180px);
  display: grid;
  place-items: center;
}
.center { display: grid; place-items: center; }
.footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px 24px;
  border-top: 1px solid #eee;
}
.footer-col { display: grid; gap: 6px; }
.btn-primary.small { padding: 6px 10px; }
</style>
