<script setup>
const items = [
  'Products','Maggi','Bru','Red Bull','Bourn Vita',
  'Horlicks','Harpic','Scotch Brite','Coca cola','Coca cola','Coca cola'
]

const timeline = [
  { date:'11/12/22', status:'Delayed' },
  { date:'21/12/22', status:'Confirmed' },
  { date:'5/12/22',  status:'Returned' },
  { date:'8/12/22',  status:'Out for delivery' },
  { date:'9/1/23',   status:'Returned' },
  { date:'9/1/23',   status:'Out for delivery' },
  { date:'15/12/23', status:'Delayed' },
  { date:'6/6/23',   status:'Confirmed' },
  { date:'11/11/22', status:'Delayed' },
  { date:'11/11/22', status:'Delayed' },
  { date:'11/11/22', status:'Delayed' },
]
</script>

<template>
  <div class="orders-frame">
    <!-- LEFT -->
    <section class="col-left">
      <h3 class="title">Orders</h3>
      <div class="left-head muted">Products</div>
      <ul class="list">
        <li v-for="(x,i) in items" :key="i">
          <span :style="i===0?'color:#2563eb;font-weight:600':''">{{ x }}</span>
        </li>
      </ul>
      <div class="pager-left"><button class="btn">Previous</button></div>
    </section>

    <!-- CENTER -->
    <section class="col-center">
      <h3 class="title">New Order</h3>
      <form class="form2" @submit.prevent>
        <div class="lbl">Product Name</div><input class="input" placeholder="Enter product name" />
        <div class="lbl">Product ID</div><input class="input" placeholder="Enter product ID" />
        <div class="lbl">Category</div><input class="input" placeholder="Select product category" />
        <div class="lbl">Order value</div><input class="input" placeholder="Enter order value" />
        <div class="lbl">Quantity</div><input class="input" placeholder="Enter product quantity" />
        <div class="lbl">Unit</div><input class="input" placeholder="Enter product unit" />
        <div class="lbl">Buying price</div><input class="input" placeholder="Enter buying price" />
        <div class="lbl">Date of delivery</div><input class="input" placeholder="Enter date of delivery" />

        <div class="check-row">
          <input type="checkbox" checked id="notify">
          <label for="notify" class="muted">Notify on the date of delivery</label>
        </div>

        <div class="actions">
          <button type="button" class="btn">Discard</button>
          <button type="submit" class="btn primary">Add Product</button>
        </div>
      </form>
    </section>

    <!-- RIGHT -->
    <section class="col-right">
      <div class="right-actions">
        <button class="btn primary">Add Product</button>
        <button class="btn">Filters</button>
        <button class="btn">Order History</button>
      </div>
      <div class="table-head"><div>Expected Delivery</div><div>Status</div></div>
      <div>
        <div v-for="(r,i) in timeline" :key="i" class="tr">
          <div>{{ r.date }}</div>
          <div class="status" :data-status="r.status">{{ r.status }}</div>
        </div>
      </div>
      <div class="pager-right">
        <div class="muted small">Page 1 of 10</div>
        <button class="btn">Next</button>
      </div>
    </section>
  </div>
</template>
