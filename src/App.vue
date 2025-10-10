<script setup>
import logo from './assets/logo.png'   // coloca logo.png en src/assets
import userImg from './assets/user.png' // coloca user.png (icono usuario) en src/assets
import SuppliersPage from './components/SuppliersPage.vue'
</script>

<template>
  <div class="layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="brand">
        <img :src="logo" alt="LogisPe" class="logo" />
      </div>
      <nav class="nav" style="height:calc(100% - 72px)">
        <a href="#"><span>🏠</span> Home</a>
        <a href="#"><span>🧾</span> Stock Available</a>
        <!-- quitar 'active' aquí -->
        <a href="#"><span>🧺</span> Orders</a>
        <a href="#"><span>🍳</span> Recipes and Supplies</a>
        <!-- mantener activo SOLO Suppliers -->
        <a href="#" class="active"><span>⚙️</span> Suppliers</a>
        <div style="flex:1"></div>
        <a href="#" class="logout"><span>⎋</span> Logout</a>
      </nav>
    </aside>

    <!-- Main -->
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
        <SuppliersPage />
      </main>

      <!-- Red overlay + modal (static) -->
      <div class="overlay-red">
        <div class="modal supplier">
          <div class="modal-header">
            <h3>New Supplier</h3>
          </div>

          <div class="modal-body">
            <div class="avatar-drop">
              <!-- SIN borde: mostramos user.png a 84x84 -->
              <div class="avatar-ring">
                <img :src="userImg" alt="user" />
              </div>
              <div class="avatar-legend">
                <div>Drag image here</div>
                <div class="or">or</div>
                <a href="#" class="link">Browse image</a>
              </div>
            </div>

            <div class="form-rows">
              <div class="form-row">
                <div class="lbl">Supplier Name</div>
                <div class="ctrl"><input class="txt" placeholder="Entersupplier name" /></div>
              </div>
              <div class="form-row">
                <div class="lbl">Product</div>
                <div class="ctrl"><input class="txt" placeholder="Enter product" /></div>
              </div>
              <div class="form-row">
                <div class="lbl">Category</div>
                <div class="ctrl"><input class="txt" placeholder="Select product category" /></div>
              </div>
              <div class="form-row">
                <div class="lbl">Buying Price</div>
                <div class="ctrl"><input class="txt" placeholder="Enter buying price" /></div>
              </div>
              <div class="form-row">
                <div class="lbl">Contact Number</div>
                <div class="ctrl"><input class="txt" placeholder="Enter supplier contact number" /></div>
              </div>
              <div class="form-row">
                <div class="lbl">Type</div>
                <div class="ctrl">
                  <div class="type-inline">
                    <button class="btn active">Not taking return</button>
                    <button class="btn">Taking return</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-actions">
            <button class="btn">Discard</button>
            <button class="btn primary">Add Supplier</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

