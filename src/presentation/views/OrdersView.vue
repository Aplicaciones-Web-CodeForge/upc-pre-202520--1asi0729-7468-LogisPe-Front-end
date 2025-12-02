<script setup>
import { ref, onMounted } from 'vue'
import { getOrders, createOrder, updateOrder, deleteOrder } from '@/services/api'
import { t } from '@/utils/i18n'

const orders = ref([])
const loading = ref(false)
const error = ref('')
const showForm = ref(false)
const editingId = ref(null)
const form = ref({ orderNumber: '', status: '', supplierId: 1, storeId: 1, sku: '', quantity: 1 })

onMounted(async () => {
  loading.value = true
  try {
    orders.value = await getOrders()
  } catch (e) {
    error.value = e.message || t('orders.error')
  } finally {
    loading.value = false
  }
})

function onAdd(){
  editingId.value = null
  form.value = { orderNumber: '', status: '', supplierId: 1, storeId: 1, sku: '', quantity: 1 }
  showForm.value = true
}

function onEdit(o){
  editingId.value = o.id
  const firstItem = (o.items && o.items[0]) || { sku: '', quantity: 1 }
  form.value = { orderNumber: o.orderNumber || '', status: o.status || '', supplierId: o.supplierId || 1, storeId: o.storeId || 1, sku: firstItem.sku || '', quantity: firstItem.quantity || 1 }
  showForm.value = true
}

async function onRemove(o){
  if (!confirm(`${t('orders.confirmDelete')}: #${o.id}?`)) return
  try {
    await deleteOrder(o.id)
    orders.value = orders.value.filter(x => x.id !== o.id)
  } catch(e){
    alert(e.message || t('orders.deleteFailed'))
  }
}

async function onSubmit(){
  const payload = { orderNumber: form.value.orderNumber, status: form.value.status, supplierId: form.value.supplierId, storeId: form.value.storeId, items: [{ sku: form.value.sku, quantity: form.value.quantity }] }
  try {
    if (editingId.value){
      const updated = await updateOrder(editingId.value, payload)
      orders.value = orders.value.map(o => o.id === editingId.value ? updated : o)
    } else {
      const created = await createOrder(payload)
      orders.value.push(created)
    }
    showForm.value = false
    editingId.value = null
    form.value = { orderNumber: '', status: '', supplierId: 1, storeId: 1, sku: '', quantity: 1 }
  } catch(e){
    alert(e.message || t('orders.saveFailed'))
  }
}
</script>

<template>
  <main class="wrap">
    <header class="title">{{ t('orders.title') }}</header>

    <section class="card">
      <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
        <button type="button" class="btn btn-primary" @click="onAdd">{{ t('orders.add') }}</button>
      </div>
      <div v-if="showForm" class="card" style="padding:12px;margin-bottom:8px">
        <div class="grid">
          <div class="col-12 md:col-4">
            <label class="field">
              <span>#</span>
              <input v-model="form.orderNumber" placeholder="#" />
            </label>
          </div>
          <div class="col-12 md:col-4">
            <label class="field">
              <span>{{ t('orders.field.status') }}</span>
              <input v-model="form.status" :placeholder="t('orders.field.status')" />
            </label>
          </div>
          <div class="col-12 md:col-4">
            <label class="field">
              <span>SKU</span>
              <input v-model="form.sku" placeholder="SKU" />
            </label>
          </div>
          <div class="col-12 md:col-4">
            <label class="field">
              <span>{{ t('stock.field.quantity') }}</span>
              <input type="number" min="1" v-model.number="form.quantity" :placeholder="t('stock.field.quantity')" />
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
            <th>{{ t('orders.col.id') }}</th>
            <th>#</th>
            <th>{{ t('orders.col.status') }}</th>
            <th>Items</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading"><td colspan="4">{{ t('orders.loading') }}</td></tr>
          <tr v-else-if="error"><td colspan="4" class="error">{{ error || t('orders.error') }}</td></tr>
          <tr v-else v-for="o in orders" :key="o.id">
            <td>#{{ o.id }}</td>
            <td>{{ o.orderNumber }}</td>
            <td>{{ o.status }}</td>
            <td>{{ (o.items || []).reduce((a,i)=>a + (i.quantity || 0), 0) }}</td>
            <td style="text-align:right">
              <button class="btn btn-outline" @click="onEdit(o)">{{ t('orders.btn.edit') }}</button>
              <button class="btn btn-danger" @click="onRemove(o)">{{ t('orders.btn.delete') }}</button>
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