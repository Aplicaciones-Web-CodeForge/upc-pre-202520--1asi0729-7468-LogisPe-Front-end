<script setup>
import RsSidebar from './components/rs-sidebar.vue';
import ManageStore from './components/manage-store.vue';
</script>

<template>
  <div class="logispe-page">
    <!-- TOP BAR -->
    <pv-toolbar class="bg-top px-3" aria-label="Main toolbar">
      <template #start>
        <div class="flex align-items-center">
          <div class="logo-circle mr-2" aria-hidden="true"></div>
          <span class="brand">
            <span class="brand-base">Logis</span><span class="brand-pe">Pe</span>
          </span>
        </div>
      </template>

      <template #center>
        <pv-icon-field class="search-field">
          <pv-input-icon><i class="pi pi-search" /></pv-input-icon>
          <pv-input-text
              placeholder="Search product, supplier, order"
              aria-label="Search product, supplier, order"
              class="w-full"
          />
        </pv-icon-field>
      </template>

      <template #end>
        <i class="pi pi-bell text-white mr-3" aria-label="Notifications"></i>
        <pv-avatar icon="pi pi-user" shape="circle" size="large" aria-label="User menu" />
      </template>
    </pv-toolbar>

    <!-- BODY -->
    <div class="logispe-body">
      <rs-sidebar />
      <div class="content-pane">
        <manage-store />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ===== Overrides globales del template de Vite ===== */
:global(:root){ color-scheme: light; }
:global(body){
  margin:0; display:block; place-items:normal;
  min-width:0; min-height:100vh;
  background:#f6f7fb; color:#111827;
}
/* ⬇️ anula el centrado y padding del template Vite */
:global(#app){
  max-width:none !important;
  margin:0 !important;
  padding:0 !important;
  text-align:initial !important;
}

/* Topbar */
.bg-top{ background:#1f2a37; color:#fff; }
.logo-circle{ width:36px; height:36px; border-radius:50%; background:#2aa198; }
.brand{ font-weight:700; font-size:1.3rem; letter-spacing:.2px; color:#e9ecef; }
.brand-base{ color:#e9ecef; }
.brand-pe{ color:#7adf7a; margin-left:1px; }
.search-field{ width:32rem; max-width:46vw; }
.search-field :deep(.p-inputtext){ background:#ffffff; }


.logispe-page{ width:100%; }
.logispe-body{
  width:100%;
  margin:0;
  display:grid;
  grid-template-columns:260px 1fr;
  min-height:calc(100vh - 64px);
  background:#ffffff;
}
.content-pane{
  padding:1.25rem;
  background:#ffffff;
=======
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
