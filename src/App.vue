<script setup>
import SuppliersPage from './components/SuppliersPage.vue'
</script>

<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="brand">
        <img src="/logo.png" alt="LogisPe" />
      </div>
      <nav class="nav" style="height:calc(100% - 72px)">
        <a href="#"><span>🏠</span> Home</a>
        <a href="#"><span>🧾</span> Stock Available</a>
        <a href="#"><span>🧺</span> Orders</a>
        <a href="#"><span>🍳</span> Recipes and Supplies</a>
        <a href="#" class="active"><span>⚙️</span> Suppliers</a>
        <div style="flex:1"></div>
        <a href="#" class="logout"><span>⎋</span> Logout</a>
      </nav>
    </aside>

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
        <div class="card">
          <div class="card-header">
            <h3>Suppliers</h3>
            <div class="page-actions">
              <button class="btn primary">Add Product</button>
              <button class="btn">Filters</button>
              <button class="btn">Download all</button>
            </div>
          </div>
          <div class="card-body">
            <SuppliersPage/>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

