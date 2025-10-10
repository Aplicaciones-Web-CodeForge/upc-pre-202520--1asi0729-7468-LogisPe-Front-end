<script setup>
import logo from './assets/logo.png'
import ManageStore from './components/ManageStore.vue'
</script>

<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="brand"><img :src="logo" alt="LogisPe"/></div>
      <nav class="nav" style="height:calc(100% - 72px)">
        <a href="#"><span>🏠</span> Home</a>
        <a href="#"><span>🧾</span> Stock Available</a>
        <a href="#"><span>🧺</span> Orders</a>
        <a href="#" class="active"><span>🍳</span> Recipes and Supplies</a>
        <a href="#"><span>🤝</span> Suppliers</a>
        <div style="flex:1"></div>
        <a href="#" class="logout"><span>⎋</span> Logout</a>
      </nav>
    </aside>

    <div style="display:flex;flex-direction:column;min-width:0">
      <header class="header">
        <div class="search"><span>🔎</span><input placeholder="Search product, supplier, order"/></div>
        <div style="display:flex;align-items:center;gap:14px"><span>🔔</span><span>👤</span></div>
      </header>

      <main class="container">
        <ManageStore/>
      </main>
    </div>
  </div>
</template>
