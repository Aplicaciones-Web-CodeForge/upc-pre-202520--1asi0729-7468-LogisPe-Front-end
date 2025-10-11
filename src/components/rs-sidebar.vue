<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function onLogout(){
  localStorage.removeItem('user')
  router.push({ name: 'login' })
}
</script>

<template>
  <aside class="rs-sidebar" aria-label="Sidebar navigation">
    <ul class="menu">
      <!-- TODO: reemplazar por links reales -->
      <li class="menu-item">
        <router-link class="as-link" :to="{ name: 'home' }">
          <i class="pi pi-home mr-2" aria-hidden="true"></i>
          <span>Home</span>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link class="as-link" :to="{ name: 'stock' }">
          <i class="pi pi-inbox mr-2" aria-hidden="true"></i>
          <span>Stock Available</span>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link class="as-link" :to="{ name: 'orders' }">
          <i class="pi pi-shopping-cart mr-2" aria-hidden="true"></i>
          <span>Orders</span>
        </router-link>
      </li>

      <!-- ÚNICO ACTIVO -->
      <router-link class="menu-item active" :to="{ name: 'recipes' }">
        <i class="pi pi-shopping-bag mr-2" aria-hidden="true"></i>
        <span>Recipes and Supplies</span>
      </router-link>

      <li class="menu-item">
        <router-link class="as-link" :to="{ name: 'suppliers' }">
          <i class="pi pi-cog mr-2" aria-hidden="true"></i>
          <span>Suppliers</span>
        </router-link>
      </li>
    </ul>

    <div class="grow"></div>

    <div class="logout">
      <button type="button" class="logout-btn" @click="onLogout">
        <i class="pi pi-sign-out mr-2" aria-hidden="true"></i>
        <span>Logout</span>
      </button>
    </div>
  </aside>
</template>

<style scoped>
.rs-sidebar {
  background: #f0f2f5;
  border-right: 1px solid #e6e8ec;
  height: 100%;
  padding: .75rem 0;
  display: flex;
  flex-direction: column;
}
.menu { list-style: none; padding: 0; margin: 0; }
.menu-item {
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .9rem 1rem;
  margin: .25rem .5rem;
  border-radius: .6rem;
  color: #374151;
  font-weight: 600;
}
.menu-item.active {
  background: #c62828; /* rojo estilo mock */
  color: #fff;
}
.as-link {
  background: transparent; border: 0; color: inherit; font: inherit;
  display: flex; align-items: center;
}
.grow { flex: 1 1 auto; }
.logout { padding: .75rem .5rem; }
.logout-btn {
  width: 100%;
  background: #b71c1c; color: #fff; border: 0;
  padding: .75rem 1rem; border-radius: .6rem; font-weight: 600;
}
</style>
