<script setup>
import RsSidebar from '@/components/rs-sidebar.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { t, isEN, setLang } from '@/utils/i18n'

const router = useRouter()
const showUserMenu = ref(false)
const isSidebarOpen = ref(false)
const menuRef = ref(null)
const user = ref({ fullName: '', email: '' })

function loadUser() {
  try {
    const raw = localStorage.getItem('user')
    if (raw) {
      const u = JSON.parse(raw)
      user.value.fullName = u?.fullName || u?.name || ''
      user.value.email = u?.email || ''
    }
  } catch (e) {}
}

function avatarLetter() {
  return (user.value.fullName?.[0] || user.value.email?.[0] || 'U').toUpperCase()
}

function toggleUserMenu() { showUserMenu.value = !showUserMenu.value }
function onLogout(){ localStorage.removeItem('user'); showUserMenu.value = false; router.push({ name: 'login' }) }
function onDocumentClick(e){ if (menuRef.value && !menuRef.value.contains(e.target)) { showUserMenu.value = false } }

onMounted(() => { loadUser(); document.addEventListener('click', onDocumentClick) })
onBeforeUnmount(() => { document.removeEventListener('click', onDocumentClick) })

function toggleLang(){ setLang(isEN.value ? 'es' : 'en') }
function toggleSidebar(){ isSidebarOpen.value = !isSidebarOpen.value }
function closeSidebar(){ isSidebarOpen.value = false }
</script>

<template>
  <div class="logispe-page">
    <!-- TOP BAR -->
    <header class="topbar" aria-label="Main toolbar">
      <div class="topbar-start">
        <button class="hamburger" type="button" aria-label="Toggle sidebar" @click="toggleSidebar">
          <span></span><span></span><span></span>
        </button>
        <div class="logo-circle" aria-hidden="true"></div>
        <span class="brand"><span class="brand-base">Logis</span><span class="brand-pe">Pe</span></span>
      </div>
      <div class="topbar-center">
        <div class="search-field">
          <i class="pi pi-search" aria-hidden="true" style="margin-right:8px;color:#9ca3af"></i>
          <input class="input" :placeholder="t('top.search')" :aria-label="t('top.search')" />
        </div>
      </div>
      <div class="topbar-end">
        <button class="lang-toggle" type="button" @click="toggleLang" :aria-label="isEN ? 'Switch to Spanish' : 'Cambiar a inglés'">{{ isEN ? 'EN' : 'ES' }}</button>
        <i class="pi pi-bell" :aria-label="t('top.notifications')"></i>
        <div class="user-menu" ref="menuRef">
          <button class="avatar" type="button" :aria-label="t('top.userMenuAria')" @click="toggleUserMenu">
            <span>{{ avatarLetter() }}</span>
          </button>
          <div v-if="showUserMenu" class="menu-panel" role="menu" :aria-label="t('top.userActionsAria')">
            <div class="menu-header">
              <div class="avatar small">{{ avatarLetter() }}</div>
              <div class="user-meta">
                <strong class="name">{{ user.fullName || user.email }}</strong>
                <span class="email" v-if="user.fullName">{{ user.email }}</span>
              </div>
            </div>
            <router-link class="menu-item" role="menuitem" :to="{ name: 'profile' }" @click="showUserMenu=false">
              <i class="pi pi-user" aria-hidden="true"></i>
              <span>{{ t('user.profile') }}</span>
            </router-link>
            <button class="menu-item" role="menuitem" type="button" @click="onLogout">
              <i class="pi pi-sign-out" aria-hidden="true"></i>
              <span>{{ t('user.logout') }}</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- BODY -->
    <div class="logispe-body">
      <rs-sidebar :open="isSidebarOpen" />
      <div class="content-pane" @click="closeSidebar">
        <router-view />
      </div>
      <div v-if="isSidebarOpen" class="overlay" @click="closeSidebar" />
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
.topbar{ display:grid; grid-template-columns:1fr 2fr 1fr; align-items:center; gap:1rem; padding:.75rem 1rem; background:var(--brand-dark); color:#fff; }
.topbar-start{ display:flex; align-items:center; gap:.6rem }
.hamburger{ display:none; width:36px; height:36px; border-radius:8px; border:1px solid #e5e7eb; background:#fff; align-items:center; justify-content:center; gap:3px }
.hamburger span{ display:block; width:18px; height:2px; background:#111827 }
.logo-circle{ width:36px; height:36px; border-radius:50%; background:#2aa198; }
.brand{ font-weight:700; font-size:1.3rem; letter-spacing:.2px; color:#e9ecef; }
.brand-base{ color:#e9ecef; }
.brand-pe{ color:var(--brand-green); margin-left:1px; }
.topbar-center{ display:flex; justify-content:center }
.search-field{ display:flex; align-items:center; width:32rem; max-width:46vw; background:#ffffff; border-radius:10px; border:1px solid var(--border); padding:.35rem .6rem }
.topbar-end{ display:flex; align-items:center; justify-content:flex-end; gap:.8rem }
.topbar-end .pi{ color:#fff }
.avatar{ width:36px; height:36px; border-radius:50%; background:#334155; display:grid; place-items:center }
.lang-toggle{ border:1px solid #e5e7eb; background:#fff; color:#111827; border-radius:8px; padding:.3rem .5rem; font-weight:600; cursor:pointer }


.logispe-page{ width:100%; }
.logispe-body{
  width:100%;
  margin:0;
  display:grid;
  grid-template-columns:260px 1fr;
  min-height:calc(100vh - 64px);
  background:var(--surface);
}
.content-pane{
  padding:1.25rem;
  background:var(--surface);
}
.overlay{ position:fixed; inset:64px 0 0 0; background:rgba(17,24,39,.35); backdrop-filter:saturate(120%) blur(2px) }
/* User menu */
.user-menu{ position:relative }
.avatar{ color:#fff; border:0 }
.avatar.small{ width:28px; height:28px; font-size:.8rem }
.menu-panel{ position:absolute; right:0; top:calc(100% + 8px); width:240px; background:var(--surface, #fff); border:1px solid var(--border, #e6e8ec); border-radius:12px; box-shadow:var(--shadow, 0 8px 28px rgba(16,24,40,.12)); padding:.5rem; color:#111827 }
.menu-header{ display:flex; align-items:center; gap:.6rem; padding:.4rem .5rem; border-bottom:1px solid var(--border, #e6e8ec); margin-bottom:.4rem }
.user-meta .name{ display:block; color:#111827 }
.user-meta .email{ display:block; color:var(--muted, #5b6470); font-size:.85rem }
.menu-item{ display:flex; align-items:center; gap:.5rem; width:100%; padding:.55rem .6rem; background:transparent; border:0; color:#111827; border-radius:.5rem; text-decoration:none }
.menu-item:hover{ background:#eef2f7 }

/* Utilidades globales de grid y breakpoints */
:global(.grid){ display:grid; grid-template-columns:1fr; gap:12px }
:global(.col-12){ grid-column:span 1 }
:global(.text-right){ text-align:right }
:global(.align-items-center){ align-items:center }
@media (min-width: 768px){
  :global(.grid){ grid-template-columns: repeat(12, 1fr) }
  :global(.md\:col-1){ grid-column: span 1 }
  :global(.md\:col-3){ grid-column: span 3 }
  :global(.md\:col-4){ grid-column: span 4 }
  :global(.md\:col-6){ grid-column: span 6 }
  :global(.md\:col-8){ grid-column: span 8 }
  :global(.md\:col-9){ grid-column: span 9 }
}

/* Responsivo */
@media (max-width: 1024px){
  .topbar{ grid-template-columns:1fr 1fr 1fr }
  .search-field{ max-width:100%; width:auto }
  .hamburger{ display:flex }
  .logispe-body{ grid-template-columns: 0 1fr }
}
</style>