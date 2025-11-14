<template>
  <section class="card">
    <header class="hdr">
      <h2>{{ t('home.best.title') }}</h2>
      <button class="seeall" type="button">{{ t('home.best.see_all') }}</button>
    </header>

    <table>
      <thead>
      <tr><th>{{ t('home.best.col.category') }}</th><th>{{ t('home.best.col.turnover') }}</th><th>{{ t('home.best.col.increase') }}</th></tr>
      </thead>
      <tbody>
      <tr v-for="row in rows" :key="row.name">
        <td>{{ row.name }}</td>
        <td>{{ fmtMoney(row.turnover) }}</td>
        <td><span class="tag"> {{ row.increase }}% </span></td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { fmtMoney, t } from '@/utils/i18n'
defineProps({
  rows: { type: Array, required: true } // [{name, turnover:number, increase:number}]
})
</script>

<style scoped>
.card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,.04)}
.hdr{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid #e5e7eb}
h2{font:600 16px/1.2 Inter,system-ui,sans-serif;margin:0}
.seeall{border:0;background:none;color:#6b7280;cursor:pointer}
table{width:100%;border-collapse:collapse;font:500 14px/1.4 Inter,system-ui,sans-serif}
th,td{padding:10px 12px;border-bottom:1px solid #e5e7eb;text-align:left}
th{color:#6b7280;font-weight:600}
.tag{color:#16a34a;background:rgba(22,163,74,.06);border:1px solid rgba(22,163,74,.25);padding:.1rem .4rem;border-radius:999px;font-size:12px}
</style>
