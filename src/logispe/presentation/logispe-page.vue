<script setup>
import ManageStore from './components/manage-store.vue';
import RsSidebar from "@/shared/components/rs-sidebar.vue";
</script>

<template>
  <!-- TOP BAR (conservamos tu barra actual oscura) -->
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
        <pv-input-icon>
          <i class="pi pi-search" />
        </pv-input-icon>
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
</template>

<style scoped>
/* Topbar (oscuro como tu captura) */
.bg-top { background: #1f2a37; color: #fff; }
.logo-circle { width: 36px; height: 36px; border-radius: 50%; background: #2aa198; }
.brand { font-weight: 700; font-size: 1.3rem; letter-spacing: .2px; color: #e9ecef; }
.brand-base { color: #e9ecef; }
.brand-pe { color: #7adf7a; margin-left: 1px; }
.search-field { width: 32rem; max-width: 46vw; }
.search-field :deep(.p-inputtext) { background: #ffffff; }

/* Layout dos columnas */
.logispe-body {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: calc(100vh - 64px);
  background: #f6f7fb; /* gris claro de fondo general */
}
.content-pane {
  padding: 1.25rem;
  background: #ffffff; /* fondo blanco como el mock */
}
</style>
