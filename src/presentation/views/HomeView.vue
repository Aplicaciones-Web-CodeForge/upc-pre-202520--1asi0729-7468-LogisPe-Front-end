<template>
  <main class="wrap">
    <header class="title">
      WELCOME BACK <span class="user">{{ userName }}</span>
    </header>

    <!-- Overview (3 KPIs) -->
    <section class="grid3">
      <OverviewKpiCard :value="21190" label="Total Profit" />
      <OverviewKpiCard :value="18300" label="Revenue" :accent="true" />
      <OverviewKpiCard :value="17432" label="Sales" />
    </section>

    <!-- Secondary (4 KPIs) -->
    <section class="grid4">
      <SecondaryKpiCard :value="117432" hint="Net purchase value" />
      <SecondaryKpiCard :value="80432"  hint="Net sales value" />
      <SecondaryKpiCard :value="30432"  hint="MoM Profit" />
      <SecondaryKpiCard :value="110432" hint="YoY Profit" />
    </section>

    <!-- Analytics -->
    <section class="analytics">
      <article class="chart card">
        <div class="hdr">
          <h2>Profit &amp; Revenue</h2>
          <button class="ghost" type="button" aria-label="Weekly">
            <i class="pi pi-calendar" style="margin-right:6px"></i> Weekly
          </button>
        </div>
        <MultiAxisChart :labels="labels" :revenue="revenue" :profit="profit" :height="340" />
      </article>

      <BestSellingCategoryTable :rows="categories" />
    </section>
  </main>
</template>

<script setup>
import MultiAxisChart from '../components/charts/MultiAxisChart.vue'
import OverviewKpiCard from '../components/home/OverviewKpiCard.vue'
import SecondaryKpiCard from '../components/home/SecondaryKpiCard.vue'
import BestSellingCategoryTable from '../components/home/BestSellingCategoryTable.vue'

const userName = '{User}' // cámbialo por el nombre real si lo tienes

// Datos mock (puedes reemplazarlos por tu API luego)
const labels   = ['Sep','Oct','Nov','Dec','Jan','Feb','Mar']
const revenue  = [22000, 34000, 32000, 56000, 61000, 47000, 50000]
const profit   = [30000, 28000, 24000, 36000, 45000, 33000, 41000]

const categories = [
  { name: 'Vegetable',   turnover: 26000, increase: 3.2 },
  { name: 'Instant Food',turnover: 22000, increase: 2.0 },
  { name: 'Households',  turnover: 22000, increase: 1.5 }
]
</script>

<style scoped>
.wrap{padding:24px 20px 28px}
.title{font:600 26px/1.2 Inter,system-ui,sans-serif;margin:4px 0 16px}
.user{font-weight:700}

/* grids */
.grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-bottom:8px}
.grid4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:16px}
.analytics{display:grid;grid-template-columns:2fr 1.1fr;gap:16px}

/* cards */
.card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,.04)}
.hdr{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid #e5e7eb}
h2{font:600 16px/1.2 Inter,system-ui,sans-serif;margin:0}
.ghost{border:1px solid #e5e7eb;background:#fff;border-radius:8px;padding:6px 10px;color:#374151;cursor:pointer}

@media (max-width: 1100px){
  .analytics{grid-template-columns:1fr}
  .grid3{grid-template-columns:1fr}
  .grid4{grid-template-columns:repeat(2,1fr)}
}
</style>
