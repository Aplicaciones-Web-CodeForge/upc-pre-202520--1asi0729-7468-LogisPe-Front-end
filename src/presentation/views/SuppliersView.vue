<script setup>
import { ref, onMounted } from 'vue'
import { getSuppliers } from '@/services/api'

const suppliers = ref([])
const loading = ref(false)
const error = ref('')

onMounted(async () => {
  loading.value = true
  try {
    suppliers.value = await getSuppliers()
  } catch (e) {
    error.value = e.message || 'No se pudieron cargar los proveedores'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main class="wrap">
    <header class="title">Suppliers</header>

    <section class="card">
      <table class="table">
        <thead>
          <tr>
            <th>Proveedor</th>
            <th>Contacto</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading"><td colspan="3">Cargando...</td></tr>
          <tr v-else-if="error"><td colspan="3" class="error">{{ error }}</td></tr>
          <tr v-else v-for="s in suppliers" :key="s.id">
            <td>{{ s.name }}</td>
            <td>{{ s.contact }}</td>
            <td>{{ s.phone }}</td>
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