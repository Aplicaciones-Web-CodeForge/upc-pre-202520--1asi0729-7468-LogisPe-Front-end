<script setup>
import { ref, onMounted } from 'vue'
import { getStores, createStore, updateStore, deleteStore } from '@/services/api'
import { t, isEN } from '@/utils/i18n'

const stores = ref([])
const loading = ref(false)
const error = ref('')

const showForm = ref(false)
const editingId = ref(null)
const form = ref({ name: '', address: '' })

async function loadStores(){
  loading.value = true
  error.value = ''
  try {
    stores.value = await getStores()
  } catch(e){
    error.value = e.message || t('manage.error')
  } finally {
    loading.value = false
  }
}

function onAdd(){
  editingId.value = null
  form.value = { name: '', address: '' }
  showForm.value = true
}

function onEdit(s){
  editingId.value = s.id
  form.value = { name: s.name, address: s.address }
  showForm.value = true
}

async function onRemove(s){
  if (!confirm(`${t('manage.confirmDeletePrefix')} ${s.branch}?`)) return
  try {
    await deleteStore(s.id)
    stores.value = stores.value.filter(x => x.id !== s.id)
  } catch(e){
    alert(e.message || t('manage.deleteFailed'))
  }
}

async function onSubmit(){
  const payload = { ...form.value }
  try {
    if (editingId.value){
      const updated = await updateStore(editingId.value, payload)
      stores.value = stores.value.map(s => s.id === editingId.value ? updated : s)
    } else {
      const created = await createStore(payload)
      stores.value.push(created)
    }
    showForm.value = false
    editingId.value = null
    form.value = { name: '', address: '' }
  } catch(e){
    alert(e.message || t('manage.saveFailed'))
  }
}

onMounted(loadStores)
</script>

<template>
  <div class="manage">
    <!-- Header -->
    <div class="head-row">
      <h2>{{ t('manage.title') }}</h2>
      <button type="button" class="btn btn-primary" @click="onAdd">{{ t('manage.add') }}</button>
    </div>

    <!-- Form -->
    <div v-if="showForm" class="store-card" style="margin-bottom:16px">
      <div class="grid">
        <div class="col-12 md:col-6">
          <label class="field">
            <span>{{ t('manage.field.store') }}</span>
            <input v-model="form.name" :placeholder="t('manage.field.store')" />
          </label>
        </div>
        <div class="col-12 md:col-6">
          <label class="field">
            <span>{{ t('manage.field.address') }}</span>
            <input v-model="form.address" :placeholder="t('manage.field.address')" />
          </label>
        </div>
        <div class="col-12 md:col-6">
          <label class="field">
            <span>{{ t('manage.field.cityzip') }}</span>
            <input v-model="form.cityzip" :placeholder="t('manage.field.cityzip')" />
          </label>
        </div>
        <div class="col-12 md:col-3">
          <label class="field">
            <span>{{ t('manage.field.phone') }}</span>
            <input v-model="form.phone" :placeholder="t('manage.field.phone')" />
          </label>
        </div>
        <div class="col-12 md:col-3 text-right" style="display:flex;gap:8px;align-items:end;justify-content:flex-end">
          <button type="button" class="btn btn-primary" @click="onSubmit">{{ editingId ? t('manage.btn.update') : t('manage.btn.save') }}</button>
          <button type="button" class="btn" @click="showForm=false">{{ t('manage.btn.cancel') }}</button>
        </div>
      </div>
    </div>

    <!-- Cards -->
    <div class="grid">
      <div v-if="loading" class="store-card">{{ t('manage.loading') }}</div>
      <div v-else-if="error" class="store-card error">{{ error || t('manage.error') }}</div>
      <div v-else v-for="(c, i) in stores" :key="c.id" class="col-12">
        <div class="store-card">
          <div class="grid align-items-center">
            <div class="col-12 md:col-9">
              <div class="detail">
                <div class="store-name">{{ c.name }}</div>
                <div class="line">{{ c.address }}</div>
              </div>
            </div>

            <!-- Edit/Delete -->
            <div class="col-12 md:col-1 text-right" style="display:flex;gap:8px;justify-content:flex-end">
              <button type="button" class="btn btn-outline" @click="onEdit(c)">{{ t('manage.btn.edit') }}</button>
              <button type="button" class="btn btn-danger" @click="onRemove(c)">{{ t('manage.btn.delete') }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor blanco, tipografía negra */
.manage { background: #ffffff; color: #111827; }

/* Cabecera */
.head-row {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 1rem;
}
h2 { margin: 0; font-weight: 700; font-size: 1.35rem; color: #111827; }


/* Card BLANCA con relieve suave */
.store-card {
  background: #ffffff;              /* <- blanco */
  border: 1px solid #e5e7eb;        /* borde leve */
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,.05); /* sombra leve */
  padding: 1.25rem;
  margin-bottom: 1rem;
  color: #111827;                   /* texto negro */
}

/* Bloque gris claro para el branch */
.branch-box {
  background: #eef2f6;              /* gris claro */
  border-radius: 10px;
  padding: 1.1rem 1rem;
  min-height: 72px;
  display: flex; align-items: center;
}
.branch-text { color: #111827; font-weight: 700; }

/* Detalles en negro */
.detail .store-name { font-weight: 700; margin-bottom: .4rem; color: #111827; }
.detail .line       { color: #111827; line-height: 1.35; }


/* Eliminamos override global de color para permitir estilos de botones del theme */
</style>
