<script setup>
const leftItems = [
  'Richard Martin','Tom Homan','Veandir','Charin','Hoffman','Fainden Juke','Martin','Joe Nike','Dender Luke','Martin','Joe Nike','Dender Luke','Joe Nike'
]
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h3 style="margin:0">Suppliers</h3>
      <div class="page-actions">
        <button class="btn primary">Add Product</button>
        <button class="btn icon">⚙️ Filters</button>
        <button class="btn">Download all</button>
      </div>
    </div>

    <div class="suppliers-grid">
      <div class="leftlist">
        <h4>Suppliers</h4>
        <ul class="list">
          <li v-for="(n,i) in leftItems" :key="i">
            <span>{{ n }}</span>
            <span class="smallmuted">›</span>
          </li>
        </ul>
        <div style="padding-top:10px">
          <button class="btn">Previous</button>
        </div>
      </div>

      <div>
        <table class="table">
          <thead>
            <tr>
              <th>Supplier Name</th>
              <th>Product</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Type</th>
              <th>On the way</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 10" :key="i">
              <td>Joe Nike</td>
              <td>Good day</td>
              <td>9567545769</td>
              <td>joenike@gmail.com</td>
              <td>Taking Return</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;color:#6b7280">
          <span>Page 1 of 10</span>
          <button class="btn">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
