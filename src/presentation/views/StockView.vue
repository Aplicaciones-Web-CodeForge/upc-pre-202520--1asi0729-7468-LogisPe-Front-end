<script setup>
import { ref, onMounted } from 'vue'
import { getStocks, createStock, updateStock, deleteStock } from '@/services/api'
import { t } from '@/utils/i18n'

const stocks = ref([])
const loading = ref(false)
const error = ref('')
const showForm = ref(false)
const editingId = ref(null)
const form = ref({ name: '', quantity: 0, unit: '' })

onMounted(async () => {
  loading.value = true
  try {
    stocks.value = await getStocks()
  } catch (e) {
    error.value = e.message || t('stock.error')
  } finally {
    loading.value = false
  }
})

function onAdd(){
  editingId.value = null
  form.value = { name: '', quantity: 0, unit: '' }
  showForm.value = true
}

function onEdit(s){
  editingId.value = s.id
  form.value = { name: s.name, quantity: s.quantity, unit: s.unit }
  showForm.value = true
}

async function onRemove(s){
  if (!confirm(`${t('stock.confirmDelete')}: ${s.name}?`)) return
  try {
    await deleteStock(s.id)
    stocks.value = stocks.value.filter(x => x.id !== s.id)
  } catch(e){
    alert(e.message || t('stock.deleteFailed'))
  }
}

async function onSubmit(){
  const payload = { ...form.value }
  try {
    if (editingId.value){
      const updated = await updateStock(editingId.value, payload)
      stocks.value = stocks.value.map(s => s.id === editingId.value ? updated : s)
    } else {
      const created = await createStock(payload)
      stocks.value.push(created)
    }
    showForm.value = false
    editingId.value = null
    form.value = { name: '', quantity: 0, unit: '' }
  } catch(e){
    alert(e.message || t('stock.saveFailed'))
  }
}
</script>

<template>
  <main class="wrap">
    <header class="title">{{ t('stock.title') }}</header>

    <section class="card">
      <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
        <button type="button" class="btn btn-primary" @click="onAdd">{{ t('stock.add') }}</button>
      </div>
      <div v-if="showForm" class="card" style="padding:12px;margin-bottom:8px">
        <div class="grid">
          <div class="col-12 md:col-4">
            <label class="field">
              <span>{{ t('stock.field.product') }}</span>
              <input v-model="form.name" :placeholder="t('stock.field.product')" />
            </label>
          </div>
          <div class="col-12 md:col-4">
            <label class="field">
              <span>{{ t('stock.field.quantity') }}</span>
              <input type="number" v-model.number="form.quantity" :placeholder="t('stock.field.quantity')" />
            </label>
          </div>
          <div class="col-12 md:col-4">
            <label class="field">
              <span>{{ t('stock.field.unit') }}</span>
              <input v-model="form.unit" :placeholder="t('stock.field.unit')" />
            </label>
          </div>
          <div class="col-12" style="display:flex;gap:8px;justify-content:flex-end">
            <button type="button" class="btn btn-primary" @click="onSubmit">{{ editingId ? t('manage.btn.update') : t('manage.btn.save') }}</button>
            <button type="button" class="btn" @click="showForm=false">{{ t('manage.btn.cancel') }}</button>
          </div>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>{{ t('stock.col.product') }}</th>
            <th>{{ t('stock.col.quantity') }}</th>
            <th>{{ t('stock.col.unit') }}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading"><td colspan="3">{{ t('stock.loading') }}</td></tr>
          <tr v-else-if="error"><td colspan="3" class="error">{{ error || t('stock.error') }}</td></tr>
          <tr v-else v-for="s in stocks" :key="s.id">
            <td>{{ s.name }}</td>
            <td>{{ s.quantity }}</td>
            <td>{{ s.unit }}</td>
            <td style="text-align:right">
              <button class="btn btn-outline" @click="onEdit(s)">{{ t('stock.btn.edit') }}</button>
              <button class="btn btn-danger" @click="onRemove(s)">{{ t('stock.btn.delete') }}</button>
            </td>
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