<script setup>
import { ref, onMounted } from 'vue'
import { getUserById, updateUser } from '../../services/api'
import { t } from '@/utils/i18n'

const loading = ref(false)
const error = ref('')
const success = ref('')

// Estado del formulario
const form = ref({
  id: null,
  fullName: '',
  email: '',
  phone: '',
  address: ''
})

function loadFromLocal() {
  try {
    const raw = localStorage.getItem('user')
    if (!raw) return
    const u = JSON.parse(raw)
    form.value.id = u?.id ?? null
    form.value.fullName = u?.fullName || u?.name || ''
    form.value.email = u?.email || ''
    form.value.phone = u?.phone || ''
    form.value.address = u?.address || ''
  } catch (e) {}
}

async function loadFromApi() {
  if (!form.value.id) return
  loading.value = true
  error.value = ''
  try {
    const u = await getUserById(form.value.id)
    form.value.fullName = u?.fullName || u?.name || form.value.fullName
    form.value.email = u?.email || form.value.email
    form.value.phone = u?.phone || ''
    form.value.address = u?.address || ''
  } catch (e) {
    error.value = t('profile.errorLoad')
  } finally {
    loading.value = false
  }
}

async function onSubmit() {
  error.value = ''
  success.value = ''
  if (!form.value.id) {
    error.value = t('profile.errorSession')
    return
  }
  loading.value = true
  try {
    const payload = {
      fullName: form.value.fullName,
      email: form.value.email,
      phone: form.value.phone,
      address: form.value.address
    }
    const updated = await updateUser(form.value.id, payload)
    // Actualiza la sesión local con el usuario modificado
    localStorage.setItem('user', JSON.stringify(updated))
    success.value = t('profile.success')
  } catch (e) {
    error.value = t('profile.errorSave')
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  loadFromLocal()
  await loadFromApi()
})
</script>

<template>
  <section class="profile-wrapper">
    <div class="card">
      <div class="profile-header">
        <div class="avatar" aria-hidden="true">{{ form.fullName?.[0] || 'U' }}</div>
        <div class="info">
          <h2 class="title">{{ t('profile.title') }}</h2>
          <p class="subtitle">{{ t('profile.subtitle') }}</p>
        </div>
      </div>

      <form class="form" @submit.prevent="onSubmit">
        <div class="field">
          <label for="fullName">{{ t('profile.field.fullname') }}</label>
          <input id="fullName" type="text" v-model="form.fullName" :placeholder="t('profile.placeholder.fullname')" required />
        </div>
        <div class="field">
          <label for="email">{{ t('profile.field.email') }}</label>
          <input id="email" type="email" v-model="form.email" :placeholder="t('profile.placeholder.email')" required />
        </div>
        <div class="field">
          <label for="phone">{{ t('profile.field.phone') }}</label>
          <input id="phone" type="tel" v-model="form.phone" :placeholder="t('profile.placeholder.phone')" />
        </div>
        <div class="field">
          <label for="address">{{ t('profile.field.address') }}</label>
          <input id="address" type="text" v-model="form.address" :placeholder="t('profile.placeholder.address')" />
        </div>

        <div class="actions">
          <button class="btn btn-primary" type="submit" :disabled="loading">{{ t('profile.save') }}</button>
        </div>

        <p v-if="error" class="error">{{ error }}</p>
        <p v-if="success" class="success">{{ success }}</p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.profile-wrapper { padding: 18px }
.card { background: var(--surface, #fff); border: 1px solid var(--border, #e6e8ec); border-radius: 12px; box-shadow: var(--shadow, 0 4px 12px rgba(16,24,40,0.08)); padding: 18px; max-width: 720px; margin: 0 auto }
.profile-header { display:flex; align-items:center; gap: 12px; margin-bottom: 8px }
.avatar { width: 52px; height: 52px; border-radius: 50%; background: var(--brand-red, #c62828); color:#fff; display:grid; place-items:center; font-weight:700 }
.info .title { margin:0; font-weight: 700 }
.info .subtitle { margin:0; color: var(--muted, #5b6470); }
.form { display:grid; gap: 12px; margin-top: 12px }
.field { display:grid; gap: 6px }
label { color: var(--muted, #5b6470) }
input { padding:.6rem .7rem; border:1px solid var(--border, #e6e8ec); border-radius:.5rem; background:#fff }
.actions { display:flex; justify-content:flex-end }
.btn-primary { background: var(--brand-red, #c62828); color:#fff; border:0; padding:.6rem .9rem; border-radius:.6rem; font-weight:600 }
.error { color: var(--brand-red, #c62828) }
.success { color: #157347 }
</style>