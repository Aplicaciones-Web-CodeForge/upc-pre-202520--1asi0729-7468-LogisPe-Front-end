<script setup>
import logo from './assets/logo.png'

const rows = [
  {name:'Maggi', price:'₹430', qty:'43 Packets', th:'12 Packets', expiry:'11/12/22', status:'In-stock'},
  {name:'Bru', price:'₹257', qty:'22 Packets', th:'12 Packets', expiry:'21/12/22', status:'Out of stock'},
  {name:'Red Bull', price:'₹405', qty:'36 Packets', th:'9 Packets', expiry:'5/12/22', status:'In-stock'},
  {name:'Bourn Vita', price:'₹502', qty:'14 Packets', th:'6 Packets', expiry:'8/12/22', status:'Out of stock'},
  {name:'Horlicks', price:'₹530', qty:'5 Packets', th:'5 Packets', expiry:'9/1/23', status:'In-stock'},
  {name:'Harpic', price:'₹605', qty:'10 Packets', th:'5 Packets', expiry:'9/1/23', status:'In-stock'},
  {name:'Ariel', price:'₹408', qty:'23 Packets', th:'7 Packets', expiry:'15/12/23', status:'Out of stock'},
  {name:'Scotch Brite', price:'₹359', qty:'43 Packets', th:'8 Packets', expiry:'6/6/23', status:'In-stock'},
  {name:'Coca cola', price:'₹205', qty:'41 Packets', th:'10 Packets', expiry:'11/11/22', status:'Low stock'},
  {name:'Coca cola', price:'₹205', qty:'41 Packets', th:'10 Packets', expiry:'11/11/22', status:'Low stock'},
  {name:'Coca cola', price:'₹205', qty:'41 Packets', th:'10 Packets', expiry:'11/11/22', status:'Low stock'},
]
const badgeClass = (s)=> s==='In-stock' ? 'badge success' : s==='Low stock' ? 'badge warning' : 'badge danger'
</script>

<template>
  <div class="layout">
    <!-- SIDEBAR -->
<aside class="sidebar">
<div class="brand">
  <img :src="logo" alt="LogisPe" class="logo" />
</div>
      <nav class="nav" style="height:calc(100% - 72px)">
        <a href="#"><span>🏠</span> Home</a>
        <a href="#" class="active"><span>🧾</span> Stock Available</a>
        <a href="#"><span>🧺</span> Orders</a>
        <a href="#"><span>🍳</span> Recipes and Supplies</a>
        <a href="#"><span>🤝</span> Suppliers</a>
        <div style="flex:1"></div>
        <a href="#" class="logout"><span>⎋</span> Logout</a>
      </nav>
    </aside>

    <!-- MAIN -->
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
            <div>
              <div style="font-weight:700">Products</div>
              <div class="small">Products</div>
            </div>
            <div class="page-actions">
              <button class="btn primary">Add Product</button>
              <button class="btn"><span>⚙️</span> Filters</button>
              <button class="btn">Download all</button>
            </div>
          </div>

          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th style="width:28%">Products</th>
                  <th>Buying Price</th>
                  <th>Quantity</th>
                  <th>Threshold Value</th>
                  <th>Expiry Date</th>
                  <th>Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(r,i) in rows" :key="i">
                  <td>{{ r.name }}</td>
                  <td>{{ r.price }}</td>
                  <td>{{ r.qty }}</td>
                  <td>{{ r.th }}</td>
                  <td>{{ r.expiry }}</td>
                  <td><span :class="badgeClass(r.status)">{{ r.status }}</span></td>
                </tr>
              </tbody>
            </table>
            <div class="container footerpager" style="padding:12px 16px">
              <button class="btn">Previous</button>
              <div>Page 1 of 10</div>
              <button class="btn">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* scoped extras for minor visual tweaks */
.table td,.table th{font-size:14px}
</style>
