<script setup>
import logo from './assets/logo.png'
import OrdersPage from './components/OrdersPage.vue'
</script>

<template>
  <div class="layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="brand">
        <img :src="logo" alt="LogisPe" />
      </div>
      <nav class="nav" style="height:calc(100% - 72px)">
        <a href="#"><span>🏠</span> Home</a>
        <a href="#"><span>🧾</span> Stock Available</a>
        <a href="#" class="active"><span>🧺</span> Orders</a>
        <a href="#"><span>🍳</span> Recipes and Supplies</a>
        <a href="#"><span>🤝</span> Suppliers</a>
        <div style="flex:1"></div>
        <a href="#" class="logout"><span>⎋</span> Logout</a>
      </nav>
    </aside>

    <!-- Right section -->
    <div style="display:flex;flex-direction:column;min-width:0">
      <header class="header">
        <div class="search">
          <span>🔎</span>
          <input placeholder="Search product, supplier, order"/>
        </div>
        <div style="display:flex;align-items:center;gap:14px">
          <span title="notifications">🔔</span>
          <span title="profile">👤</span>
        </div>
      </header>

      <main class="container">
        <OrdersPage />
      </main>
    </div>
  </div>
</template>
