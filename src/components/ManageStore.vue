<script setup>
const cards = [
  {branch:'Singanallur Branch', store:'Lisy Store', address:'1A/Krihnarajapuram, 3 rd street sulur', city:'Coimbatore - 6313403', phone:'044 - 653578'},
  {branch:'Slur Branch',        store:'Lisy Store', address:'54 Ramani colony, 3 rd street sulur',     city:'Coimbatore - 63133452', phone:'044 - 653763'},
  {branch:'Gaandipuram Branch', store:'Lisy Store', address:'32/ Venkatasamy layout, 3 rd street sulur', city:'Coimbatore - 6313403',  phone:'044 - 653578'},
]
</script>

<template>
  <section>
    <div class="ms-header">
      <h2 class="ms-title">Manage Store</h2>
      <button class="ms-add">Add Store</button>
    </div>

    <div v-for="(c,i) in cards" :key="i" class="ms-card">
      <div class="ms-inner">
        <div class="ms-branch">{{ c.branch }}</div>
        <div class="ms-detail">
          <div class="name">{{ c.store }}</div>
          <div class="line">{{ c.address }}</div>
          <div class="line">{{ c.city }}</div>
          <div class="line">{{ c.phone }}</div>
        </div>
        <button class="ms-edit">Edit</button>
      </div>
    </div>
  </section>
</template>
