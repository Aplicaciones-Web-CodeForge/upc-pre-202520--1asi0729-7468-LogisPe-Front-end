<script setup>
import { ref, onMounted } from 'vue'
import { getSuppliers, createSupplier, updateSupplier, deleteSupplier } from '@/services/api'
import { t } from '@/utils/i18n'

const suppliers = ref([])
const loading = ref(false)
const error = ref('')
const showForm = ref(false)
const editingId = ref(null)
const form = ref({ name: '', contact: '', phone: '' })

onMounted(async () => {
  loading.value = true
  try {
    suppliers.value = await getSuppliers()
  } catch (e) {
    error.value = e.message || t('suppliers.error')
  } finally {
    loading.value = false
  }
})

function onAdd(){
  editingId.value = null
  form.value = { name: '', contact: '', phone: '' }
  showForm.value = true
}

function onEdit(s){
  editingId.value = s.id
  form.value = { name: s.name, contact: s.contact, phone: s.phone }
  showForm.value = true
}

async function onRemove(s){
  if (!confirm(`${t('suppliers.confirmDelete')}: ${s.name}?`)) return
  try {
    await deleteSupplier(s.id)
    suppliers.value = suppliers.value.filter(x => x.id !== s.id)
  } catch(e) {
    alert(e.message || t('suppliers.deleteFailed'))
  }
}

async function onSubmit(){
  const payload = { ...form.value }
  try {
    if (editingId.value){
      const updated = await updateSupplier(editingId.value, payload)
      suppliers.value = suppliers.value.map(s => s.id === editingId.value ? updated : s)
    } else {
      const created = await createSupplier(payload)
      suppliers.value.push(created)
    }
    showForm.value = false
    editingId.value = null
    form.value = { name: '', contact: '', phone: '' }
  } catch(e){
    alert(e.message || t('suppliers.saveFailed'))
  }
}
</script>

<template>
  <main class="wrap">
    <header class="title">{{ t('suppliers.title') }}</header>

    <section class="card">
      <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
        <button type="button" class="btn btn-primary" @click="onAdd">{{ t('suppliers.add') }}</button>
      </div>
      <div v-if="showForm" class="card" style="padding:12px;margin-bottom:8px">
        <div class="grid">
          <div class="col-12 md:col-4">
            <label class="field">
              <span>{{ t('suppliers.field.name') }}</span>
              <input v-model="form.name" :placeholder="t('suppliers.field.name')" />
            </label>
          </div>
          <div class="col-12 md:col-4">
            <label class="field">
              <span>{{ t('suppliers.field.contact') }}</span>
              <input v-model="form.contact" :placeholder="t('suppliers.field.contact')" />
            </label>
          </div>
          <div class="col-12 md:col-4">
            <label class="field">
              <span>{{ t('suppliers.field.phone') }}</span>
              <input v-model="form.phone" :placeholder="t('suppliers.field.phone')" />
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
            <th>{{ t('suppliers.col.supplier') }}</th>
            <th>{{ t('suppliers.col.contact') }}</th>
            <th>{{ t('suppliers.col.phone') }}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading"><td colspan="3">{{ t('suppliers.loading') }}</td></tr>
          <tr v-else-if="error"><td colspan="3" class="error">{{ error || t('suppliers.error') }}</td></tr>
          <tr v-else v-for="s in suppliers" :key="s.id">
            <td>{{ s.name }}</td>
            <td>{{ s.contact }}</td>
            <td>{{ s.phone }}</td>
            <td style="text-align:right">
              <button class="btn btn-outline" @click="onEdit(s)">{{ t('suppliers.btn.edit') }}</button>
              <button class="btn btn-danger" @click="onRemove(s)">{{ t('suppliers.btn.delete') }}</button>
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