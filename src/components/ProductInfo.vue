<script setup>
import productImg from '../assets/maggi.png' // bolsita amarilla (colócala aquí)
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h2 class="title">Maggi</h2>
      <div class="page-actions">
        <button class="btn icon">✏️ Edit</button>
        <button class="btn icon">⬇️ Download</button>
      </div>
    </div>

    <!-- tabs -->
    <div class="tabs">
      <div class="tab active">Overview</div>
      <div class="tab">Purchases</div>
      <div class="tab">Adjustments</div>
      <div class="tab">History</div>
    </div>

    <div class="pi-wrap">
      <!-- left column -->
      <div class="pi-col">
        <div class="section-title">Primary Details</div>
        <div class="kv">
          <div class="k">Product name</div><div class="v">Maggi</div>
          <div class="k">Product ID</div><div class="v">456567</div>
          <div class="k">Product category</div><div class="v">Instant food</div>
          <div class="k">Expiry Date</div><div class="v">13/4/23</div>
          <div class="k">Threshold Value</div><div class="v">12</div>
        </div>

        <div class="section-title" style="margin-top:18px">Supplier Details</div>
        <div class="kv">
          <div class="k">Supplier name</div><div class="v">Ronald Martin</div>
          <div class="k">Contact Number</div><div class="v">98789 86757</div>
        </div>

        <div class="section-title" style="margin-top:18px">Stock Locations</div>
        <table class="table">
          <thead>
            <tr><th>Store Name</th><th>Stock in hand</th></tr>
          </thead>
          <tbody>
            <tr><td>Sulur Branch</td><td><span class="link">15</span></td></tr>
            <tr><td>Singanallur Branch</td><td><span class="link">19</span></td></tr>
          </tbody>
        </table>
      </div>

      <!-- right column -->
      <div>
        <div class="product-shot">
          <img :src="productImg" alt="product" />
        </div>

        <div class="metrics">
          <div class="k">Opening Stock</div><div class="v">40</div>
          <div class="k">Remaining  Stock</div><div class="v">34</div>
          <div class="k">On the way</div><div class="v">15</div>
          <div class="k">Threshold value</div><div class="v">12</div>
        </div>
      </div>
    </div>
  </div>
</template>
