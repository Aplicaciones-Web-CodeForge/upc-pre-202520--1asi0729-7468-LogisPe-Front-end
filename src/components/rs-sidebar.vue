<script setup>
import { useRoute } from 'vue-router'
import { t } from '@/utils/i18n'
const route = useRoute()
</script>

<template>
  <aside class="rs-sidebar" aria-label="Sidebar navigation">
    <ul class="menu">
      <router-link class="menu-item" :class="{ active: route.name==='home' }" :to="{ name: 'home' }">
        <i class="pi pi-home mr-2" aria-hidden="true"></i>
        <span>{{ t('sidebar.home') }}</span>
      </router-link>
      <router-link class="menu-item" :class="{ active: route.name==='stock' }" :to="{ name: 'stock' }">
        <i class="pi pi-inbox mr-2" aria-hidden="true"></i>
        <span>{{ t('sidebar.stock') }}</span>
      </router-link>
      <router-link class="menu-item" :class="{ active: route.name==='orders' }" :to="{ name: 'orders' }">
        <i class="pi pi-shopping-cart mr-2" aria-hidden="true"></i>
        <span>{{ t('sidebar.orders') }}</span>
      </router-link>
      <router-link class="menu-item" :class="{ active: route.name==='recipes' }" :to="{ name: 'recipes' }">
        <i class="pi pi-shopping-bag mr-2" aria-hidden="true"></i>
        <span>{{ t('sidebar.recipes') }}</span>
      </router-link>
      <router-link class="menu-item" :class="{ active: route.name==='suppliers' }" :to="{ name: 'suppliers' }">
        <i class="pi pi-cog mr-2" aria-hidden="true"></i>
        <span>{{ t('sidebar.suppliers') }}</span>
      </router-link>
    </ul>

    <div class="grow"></div>
  </aside>
</template>

<style scoped>
.rs-sidebar { background: #f3f4f6; border-right: 1px solid var(--border, #e6e8ec); height: 100%; padding:.75rem 0; display:flex; flex-direction:column }
.menu { list-style:none; padding:0; margin:0 }
.menu-item { display:flex; align-items:center; gap:.6rem; padding:.85rem 1rem; margin:.25rem .6rem; border-radius:.6rem; color:var(--muted, #5b6470); font-weight:600; transition: background .2s ease }
.menu-item:hover { background:#eef2f7 }
.menu-item.active { background: var(--brand-red); color:#fff }
.as-link { background:transparent; border:0; color:inherit; font:inherit; display:flex; align-items:center }
.grow { flex:1 1 auto }
</style>
