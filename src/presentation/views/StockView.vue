<script setup>
import { ref, onMounted } from 'vue'
import { getStocks } from '@/services/api'

const stocks = ref([])
const loading = ref(false)
const error = ref('')

onMounted(async () => {
  loading.value = true
  try {
    stocks.value = await getStocks()
  } catch (e) {
    error.value = e.message || 'No se pudo cargar el stock'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main class="wrap">
    <header class="title">Stock Available</header>

    <section class="card">
      <table class="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Unidad</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading"><td colspan="3">Cargando...</td></tr>
          <tr v-else-if="error"><td colspan="3" class="error">{{ error }}</td></tr>
          <tr v-else v-for="s in stocks" :key="s.id">
            <td>{{ s.name }}</td>
            <td>{{ s.quantity }}</td>
            <td>{{ s.unit }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<style scoped>
.wrap{padding:24px 20px 28px}
.title{font:600 26px/1.2 Inter,system-ui,sans-serif;margin:4px 0 16px}
.card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,.04);padding:8px}
.table{width:100%;border-collapse:collapse}
th,td{padding:10px;border-bottom:1px solid #e5e7eb;text-align:left}
.error{color:#c62828}
</style>